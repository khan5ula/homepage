---
title: 'Push footer to bottom with CSS on page with varying height'
url: 'push-footer-to-bottom-of-page-css-varying-page-height'
description: 'This was really bugging me, until I finally got it right. Read the whole thing in my blog.'
published: true
pubDate: 16/11/2023
author: 'Kristian Hannula'
tags: ['css']
---

This one was really bugging me out. The footer on my website was pushed to the bottom of the page by giving the content wrapper min-height of `screen`. The solution worked, but it forced the footer below the page, and I didn't like how it looked on pages that had only little content.

I tried different approaches with flexbox, tables, and grids, as suggested on stackoverflow. Finally, I found the working combination:

```javascript
<body class="flex flex-col min-h-[100vh]">
  <main class="flex-1">
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</body>
```

Stupid simple, right?
