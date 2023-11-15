---
title: 'How to do case-insensitive query with Sequelize and PostGres'
url: 'how-to-query-case-insensitive-with-sequelize-and-postgres'
description: 'I was struggling with this simple task until I got it right. Read the whole thing in my blog.'
published: true
pubDate: 15/11/2023
author: 'Kristian Hannula'
tags: ['sequelize', 'postgres']
---

So, I needed to do a case insensitive search with `postgres`. Perhaps it's just me, but I couldn't figure it out [from the documentation](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators). Here's what worked:

```javascript
const { Op } = require('sequelize')

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll({
    where: {
      title: {
        [Op.iLike]: `%${req.query.search || ''}%`,
      },
    },
  })
  res.json(blogs)
})
```

On hindsight, the solution was quite obvious from the documentation. I didn't realize I needed to add backticks and percentages to the statement.

For a comparison, here's a working solution for a case sensitive query:

```javascript
const { Op } = require('sequelize')

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll({
    where: {
      title: {
        [Op.substring]: req.query.search ? req.query.search : '',
      },
    },
  })
  res.json(blogs)
})
```

No backticks!?
