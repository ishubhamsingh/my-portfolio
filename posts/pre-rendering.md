---
title: 'Two Forms of Pre-rendering'
description: "This is another dummy description."
headerImage: "https://unsplash.com/photos/vpOeXr5wmR4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Y29kZXxlbnwwfHx8fDE3MTIzNDg2MzF8MA&force=true&w=640"
categories:
    - react
    - coding
date: '2024-04-02'
authorName: "Shubham Singh"
authorAvatar: "/images/shubham-singh-dp.png"
published: false
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.