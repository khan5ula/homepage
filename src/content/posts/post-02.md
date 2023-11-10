---
title: 'I migrated my static React site to Astro'
url: 'i-migrated-my-static-react-site-to-astro'
published: true
pubDate: 10/11/2023
author: 'Kristian Hannula'
tags: ['react', 'astro', 'tailwind']
---

Creating a simple static React site with a markdown powered blog was a good learning experience. As I explained in my [previous post](/posts/rendering-markdown-files-with-react-typescript-vite-and-tailwind/), a seemingly simple task of rendering markdown based blog posts required some unexpected tinkering.

The next step was to create dynamic routes for the posts, because creating routes and links manually for all blog posts was not a very sustainable development principle. The solution I came up with worked, but I didn't quite like it.

My solution required me to maintain a separate file for blog details such as url, title and pubDate (which is basically a `FrontMatter` job, more on that later). Then, I imported the list of blog details in a component that wrapped the contents of the file to `react-router-rom Routes`. Next, I used a PostLoader component to fetch the actual blog posts from a public folder:

```javascript
import { useEffect, useState } from 'react'
import BlogPost from './BlogPost'

interface props {
  filepath: string
  date: string
}

const PostLoader = ({ filepath, date }: props) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(filepath)
      .then((response) => response.text())
      .then((data) => setMarkdown(data))
  }, [filepath])

  return <BlogPost markdown={markdown} date={date} />
}

export default PostLoader
```

Yeah... Fetching from a public folder on a static website just did not feel right. It worked, but the loading times were way off for a simple site. At that point I sighed and realized I needed a framework around my React creation.

## Why I chose Astro

While Next.js seems to be currently be the most popular and perhaps the most feature-rich framework around React, I think [Astro](https://astro.build/) has a smart philosophy when it comes to rendering content. Astro renders content (React components included) in static HTML by default, which reduces the amount of JS required to load by client. Astro is also quite versatile, allowing me to use multiple libraries for components if I want. So, after having fun with couple of Astro tutorials, I decided to wrap my site inside Astro.

The migration was quite easy to do after completing the Astro Blog tutorial. I placed my routed components to a folder called `places` and astro took care of routing. Then I placed my posts into a designated `content` folder and, after which Astro handled dynamic routing with slug, similarly to how it's handled in next.js.

My unholy method of fetching posts from a public folder evolved to this:

```javascript
---
import { getCollection } from 'astro:content'
import MarkdownPostLayout from '../../layouts/MarkdownPostLayout.astro'

export async function getStaticPaths() {
  const blogEntries = await getCollection('posts')
  return blogEntries.map((entry) => ({
      params: { slug: entry.data.url },
    props: { entry },
  }))
}

const { entry } = Astro.props
const { Content } = await entry.render()
---

<MarkdownPostLayout frontmatter={entry.data}>
  <h1>{entry.data.title}</h1>
  <Content />
</MarkdownPostLayout>
```

That also takes care of rendering! No need to import or configure plugins. Also, as Astro used FrontMatter natively, I didn't need to keep a separate record of post details. I could add some FrontMatter to the beginning of my post:

```
---
title: '...'
url: '...'
published: ...
pubDate: ...
author: '...'
tags: ['...']
---
```

... and use the details on my blog listing:

```javascript
import type { Post } from '../types.ts'

interface Props {
  posts: Post[];
}

const { posts } = Astro.props

const orderedPosts = posts
  .filter((post) => post.data.published)
  .sort((a, b) => (a.data.pubDate > b.data.pubDate ? 1 : -1))
```

One small thing that bugged me with Tailwind's Typography was that for some reason these `one-liner code pieces` were rendered with these ` symbols. I overwrote a CSS rule:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // ...
            'code::after': {
              content: '""',
            },
            code: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```
