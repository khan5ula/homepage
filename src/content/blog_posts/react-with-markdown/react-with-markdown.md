# Using Markdown with React + Typescript + Vite

This post is written on markdown and rendered with a React frontend. At this moment, my website runs on React & Vite + Typescript. Oh, and I use Bun instead of Npm. In this post, I'll explain how I got markdown files working with a react application.

## Problem

So. I decided I wanted to use markdown (\*.md) to format the content on my homepage. Right now my site is very simple, consisting only of a React frontend, which means I don't have a spohisticated system for content creation or managing. I didn't want just to write everything as HTML, which made Markdown feel like an intuitive choice. I've seen quite a few implementations that use Markdown as the base for the content.

Easy enough, right? Well, thanks to the plugins and resources available on the internet, it kinda is. After clearing out some trouble. Rendering markdown content as a string was easy thanks to the [react-markdown](https://github.com/remarkjs/react-markdown) plugin. Importing markdown files was not so easy.

## What worked

Let's go over my solution step by step.

First, download react-markdown with:

```
bun install react-markdown
```

If you use npm, replace bun with npm.

Import Markdown to the component that renders the markdown file.

Now, rendering a markdown string should work. You can try it with a sample:

```javascript
import Markdown from 'react-markdown'

const component = () => {
  const markdown = '# Hello, *World*!'

  return <Markdown>{markdown}</Markdown>
}
```

Markdown that is provided as a string renders without a problem. I tried to import a markdown file, but it resulted in a following error:

> Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format, or if it's an asset, add "\*_/_.md" to assetsInclude in your configuration.

That problem was trickier to handle. I tried a few plugins and some misc. tricks, but I just kept getting errors. Finally I found a with this solution from https://onticdani.medium.com/how-to-load-and-render-markdown-files-into-your-vite-react-app-using-typescript-ba5f79822350.

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

Importing works! Now, typescript warned that the module or type declaration for the markdown import couldn't be found. I created a file `globals.d.ts` with content of:

```javascript
declare module '*.md'
```

And now the typescript server is satisfied.

Lastly, I applied easy formatting by installing [tailwindcdd/typography package](https://tailwindcss.com/docs/typography-plugin#installation). That can be done with:

```
npm install -D @tailwindcss/typography
```

The renderer should be wrapped in <article> tags.

My small component that renders a markdown file looks like this:

````javascript
const BlogPost = ({ markdown }: props) => {
  return (
    <div>
      <article className="prose">
        <Markdown>{markdown}</Markdown>
      </article>
    </div>
  )
}```
````
