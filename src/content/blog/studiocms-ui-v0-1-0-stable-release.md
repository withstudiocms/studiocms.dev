---
title: 'A new UI Library Approaches!'
description: "@studiocms/ui is our first ever stable resource!"
publishDate: 2024-12-08
blueSky:
  postId: 3lcs2al2bo22u
ogVariant: accent
author: louis-escher
---

TL;DR: 
We're releasing [@studiocms/ui](https://npmjs.org/package/@studiocms/ui), the library we use to build the StudioCMS ecosystem to the community!
---

Hi everyone!

This isn't the usual post about how we're still working on beta.8 (although that is most certainly still the case). No, today's post is about 
a pretty important milestone, as we're releasing yet another of our development tools early to the community. While building the new dashboard 
for beta.8, we've seen first-hand how helpful an Astro-First UI library can be, so we figured we might as well bring out the Christmas presents 
early:

## StudioCMS UI v0.1.0 

Starting today, we're releasing StudioCMS UI as its own project in the StudioCMS ecosystem, detached from our Monorepo and normal release schedule. 
As of Version 0.1.0, it features over 15 components, all aimed at making your life a little easier while building your next big project. 
Some highlights include our dropdown, modal and toast components, which take complex UI concepts and abstract away all the complexity into a 
single component (and maybe a helper). 

You can [check out the documentation](https://ui.studiocms.dev) to learn how to get started. We recommend using Astro v5, but the library should 
be compatible with any Project running Astro v4.5.0 or higher, as long as the `experimental.directRenderScript` flag is set to `true`. 

## Why we built an entire UI library from scratch 

StudioCMS UI was created after we realized that building a dashboard from scratch wouldn't be easy. A lot of other things had to be taken care of, 
so yours truly decided to do some research on UI libraries that might make our job a little easier. Surprisingly, there wasn't a lot of options at 
the time! Most UI libraries were simply ported from React, which introduced unnecessary complexity to project structure. Other ones rely heavily on 
libraries like Tailwindcss, which bloats the final HTML output (unpopular opinion, I know). Because we didn't like either of those options, we 
decided to go the third, and arguably harder route: building our own library from scratch. The result of the last two months is what you see now: a 
ready to go UI library which can be used in any Astro projects without additional dependencies. Plain Astro, baby.

## Baby steps

To be honest, when I proposed this UI library, I had no idea how I would implement any of it. I want to give a special shout-out to Dreyfus, 
Otter and Arknoodle for their amazing feedback and inputs on the components. However, there's still a lot to be done. The library does not yet 
meet accessibility standards, which we want to improve over time. We've got a planned accessibility audit coming up as part of StudioCMS beta.8, 
which will definitely help in getting some crucial things fixed. Until then, I hope a combined community effort can find and weed out some of the 
bigger issues.

I also hope that the community can help this UI library grow by adding new components and showing off different ways of using it, in turn revealing 
problems with it that we can then work on together.

I want to encourage everyone to give StudioCMS UI a try. The more, the better!

Thanks and until next time, <br />
**Louis and the StudioCMS team**
