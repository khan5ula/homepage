---
title: 'Rendering Markdown files with React, Typescript, Vite and Tailwind CSS'
url: 'rendering-markdown-files-with-react-typescript-vite-and-tailwind'
pubDate: 31/10/2023
published: true
author: 'Kristian Hannula'
tags: ['react', 'typescript', 'markdown', 'tailwind']
---

# Rendering Markdown files with React, Typescript, Vite and Tailwind CSS

This post is written on markdown and rendered with React. Getting markdown files to render properly on my website required some tinkering and configuration, and I'll explain everything I've done in this post.

## The problems

So.. I decided I wanted to write the content on my website with markdown (\*.md). I've seen quite a few websites using markdown so I thought implementing markdown rendering on React application should be quite simple. I installed [react-markdown](https://github.com/remarkjs/react-markdown) plugin and tested it with a simple string. Worked nicely. Then I tried to import a markdown file and render it. Errors. After fixing that, I noticed I didn't have syntax highlighting. Took some tinkering to get that working. After that, the tab indentation needed to be fixed. After a bit of tinkering, the content finally looked pretty much how I wanted.

## How I got it working

Let's go over my solution step by step.

First I downloaded `react-markdown` plugin (I use `bun` instead of `npm`):

```javascript
bun install react-markdown
```

Then, I imported the plugin to the component that renders the markdown files. Trying it out with a simple sample works:

```javascript
import Markdown from 'react-markdown'

const Component = () => {
  const markdown = '# Hello, *World*!'

  return <Markdown>{markdown}</Markdown>
}

export default Component
```

Markdown provided as a string rendered without a problem. However, if I tried to pass an imported markdown file to `<Markdown>` it resulted in a following Vite error:

> Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format, or if it's an asset, add "\*_/_.md" to assetsInclude in your configuration.

After trying out some additional plugins and miscellaneous configurations, I found a working solution from [this awesome article by Daniel Garcia](https://onticdani.medium.com/how-to-load-and-render-markdown-files-into-your-vite-react-app-using-typescript-ba5f79822350).

The key was to add a small custom plugin to vite.config.ts:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.slice(-3) === '.md') {
          return `export default ${JSON.stringify(code)};`
        }
      },
    },
  ],
})
```

Importing worked! Now, to get rid of typescript warning about missing module or type declaration, I created a file `globals.d.ts` to the root of my project with the content of:

```javascript
declare module '*.md'
```

That satisfied the Typescript server.

Now that importing and rendering the markdown file worked, it was time to focus on the aesthetics. The file rendered plainly, without any formatting. I applied easy (lazy) formatting by installing [tailwindcss/typography package](https://tailwindcss.com/docs/typography-plugin#installation):

```javascript
bun install -D @tailwindcss/typography
```

The renderer should be wrapped in `<article>` tags.

Tailwind offers `prose` classes that were perfect for my use case. Below is a simple component using my solution so far:

```javascript
import Markdown from 'react-markdown'

interface props {
  markdown: string;
}

const BlogPost = ({ markdown }: props) => {
  return (
    <div>
      <article className="prose">
        <Markdown>{markdown}</Markdown>
      </article>
    </div>
  )
}

export default BlogPost
```

Now, the overall look of the content was nice. The only issue was that there was no code highlighting. Apparently that didn't come with my lazy Typography solution. After some trial and errors, I got highlighting working on top of Typography with [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter). The nice thing was that the highlighter comes with a big set of themes to select. I went with **tomorrow**:

```javascript
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface BlogPostProps {
  markdown: string;
}

const BlogPost = ({ markdown }: BlogPostProps) => {
  return (
    <div>
      <article className="prose">
        <Markdown
          components={{
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter language={match[1]} style={tomorrow}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdown}
        </Markdown>
      </article>
    </div>
  )
}

export default BlogPost
```

Some additional module declarations were needed:

```javascript
declare module '*.md'
declare module 'react-syntax-highlighter/dist/cjs/styles/prism'
declare module 'react-syntax-highlighter'

```

Now the highlighter itself worked, but it was in conflict with Tailwind Typography package. Typography had it's own CSS for code blocks. The solution: I overwrote some Typography configurations:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '',
              padding: 0,
            },
          },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography')],
}
```

I removed the background and padding that came with the Typography package. Now Typography and react-syntax-highlighter were not in conflict and I was quite happy with the output. The last thing that bugged me was that the code indentation was too small. Apparently that side effect came with the highlighter. As I use [prettier](https://prettier.io/) to auto-format my code, I added a special rule for markdown files to my `.prettierrc.json` configuration:

```javascript
{
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true,
    "overrides": [
        {
            "files": "**/*.md",
            "options": {
                "tabWidth": 4
            }
        }
    ]
}
```

Now my markdown files were auto-formatted with 4 spaces instead of 2.

That's everything I did to render markdown files with the look I wanted.
