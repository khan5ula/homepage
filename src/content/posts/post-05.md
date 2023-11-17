---
title: 'Push footer to bottom with CSS on page with varying height'
url: 'push-footer-to-bottom-of-page-css-varying-page-height'
description: 'This was really bugging me, until I finally got it right. Read the whole thing in my blog.'
published: true
pubDate: 16/11/2023
author: 'Kristian Hannula'
tags: ['css']
---

This one was really bugging me out. The footer on my website was pushed to the bottom of the page by the wrapper div having min-height `screen`. It worked, but it pushed the footer below the page. I didn't like it, because if a page had only little content, the footer was still forced below the screen.

I tried different approaches with flexbox, tables, and grids, as suggested on stackoverflow. None of the suggested solutions didn't work as I intended.

Finally, after trial-and-error, I managed to forge a working combination:

```javascript
<body class="flex flex-col min-h-screen">
  <main class="flex-1">
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</body>
```

Stupid simple, right? The key was to give the content the possibility to [scale if needed](https://tailwindcss.com/docs/flex#flex-1), while making the body, footer included, take max height of the screen.
