---
lang: en
layout: post
ref: project
date: 2019-04-03 00:00:00 +0200
deadline: 2019-04-04 23:59:59 +0200
title: "HTML-CSS-Animation"
directory: codeaca_c1web104p2
description: "HTML-CSS-Animation"
thumbnail: /assets/img/projects/codeaca_c1web104p2-thumb.jpg
tags: [HTML5, CSS3, Js, Accessibility]
---

![{{page.title}}]({{page.thumbnail}})

### Subject

>Following the visual of the mock-up, you must integrate a page with HTML5/CSS3 by following the W3C norms and by doing as much as possible Search Engine Optimization (SEO).Don’t forget about the accessibility.

### My approach

I saw that the website used a lot of small images and that those given images weren't optimized so I decided to use a spritesheet system and optimize them.  

```bash
[2.9M]  images
├── [581K]  background_green.png
├── [450K]  background_purple.png
├── [ 73K]  background_snow.jpg
├── [ 56K]  batman.png
├── [116K]  bottle.png
├── [ 49K]  clock.png
├── [228K]  cotontige.png
├── [632K]  megot.png
├── [176K]  parasol.png
├── [402K]  plasticbag.png
├── [108K]  stars_big.png
├── [ 67K]  stars_little.png
└── [ 39K]  transat.jpg
```

```bash
[287K]  images
├── [ 89K]  background_green.png
├── [ 95K]  background_purple.png
├── [ 57K]  background_snow.jpg
├── [ 11K]  sprites.png
├── [5.6K]  stars_big.png
├── [3.8K]  stars_little.png
└── [ 26K]  transat.jpg
```

Result, the 3.1MB image folder with 13 images turned into a 300KB with 7 items.  
One difficulty was the background image because it used 4 layer with some tweaks. For the challenge of respecting the mockup I kept all of the image and arranged them with CSS, but it could be optimized by merging some of them directly in an image editor without seing any differences.  
