---
title: "Beta 8 Release"
description: "StudioCMS 0.1.0-beta.8 is being released."
publishDate: 2025-02-28
hero: 
    image: "./assets/beat-8-release.png"
    alt: "Beta 8 Release"
author: paul-valladares
---

Hey peeps, as we roll into 2025, we're super excited to drop StudioCMS version `0.1.0-beta.8`. This release builds on all the hard work we did in 2024 and brings a ton of cool improvements to help both devs and marketers easily handle content in the Astro ecosystem. Let’s break down what’s new.

## What’s New in Beta.8

StudioCMS `0.1.0-beta.8` brings several exciting features:

**Redesigned Dashboard:** The dashboard has been completely revamped using the `@studiocms/ui` library, offering a modern, intuitive interface for managing content.

**Auth System Overhaul:** Security is tighter with a new authentication system using lucia-next, new encryption (requiring a CMS_ENCRYPTION_KEY), and support for multiple oAuth providers. Login and signup pages have a fresh look with backgrounds, improving user experience.

**Headless CMS Model:** StudioCMS now focuses on backend functionalities, giving you flexibility to integrate with any frontend framework. For headful setups, the `@studiocms/blog` plugin is recommended, offering a complete solution.

**Dynamic Sitemaps:** This feature automatically generates sitemaps, improving your website’s search engine optimization (SEO) and ensuring content is discoverable.

**User Management Enhancements:** New features for creating users and sending invites simplify team collaboration, with an updated UI for better clarity.

**Plugin System and i18n:** A basic plugin system allows custom extensions, and internationalization (i18n) support makes StudioCMS accessible to a global audience.

These updates reflect our commitment to providing a robust, flexible CMS for developers.

## Beta.7 vs. Beta.8: What’s the Difference?

To highlight the advancements, here’s a comparison of key features between the last release, `0.1.0-beta.7`, and the new `0.1.0-beta.8`, based on available release notes and changelog:

| Feature | Beta.7 (Sep 24, 2024) | Beta.8 (Feb 27, 2025) |
| --- | --- | --- |
| Authentication System | Lucia-based, with basic oAuth support | Overhauled with lucia-next |
| Dashboard | Standard UI, basic navigation | Completely redesigned using `@studiocms/ui`, modern interface |
| CMS Model | Headful, integrated routes | Headless, with `@studiocms/blog` for headful setups |
| Sitemaps | Static integration | Dynamic sitemaps for improved SEO |
| User Management | Basic user creation | Enhanced with invites, updated UI |
| Plugin System | Limited, basic support | Basic system introduced, expandable |
| Internationalization | Minimal, no dedicated system | Full i18n support |

This table, derived from the GitHub releases and pull requests, illustrates the significant upgrades in beta.8, enhancing functionality and user experience.

## What’s Next & How to Get Involved

Looking ahead, we’re all about making StudioCMS even more robust. Expect more focus on stability, performance, and a killer user experience. We’re planning to expand our plugin ecosystem, improve documentation, and keep the community vibe strong—just check out our Discord if you haven’t already. A big shoutout to [turso](https://turso.tech) for their sponsorship and to everyone who’s been part of this journey.

We’d love for you to join the fun—whether it’s reporting bugs, suggesting features, or contributing code. Check out our [contributing guide](https://github.com/withstudiocms/.github/blob/main/CONTRIBUTING.md) for the details. Let’s keep pushing the boundaries together!

At the end of the day, this release is all about our passion for building a solid, open-source CMS for the Astro community. 2024 was just the beginning, and with these new features, we’re stoked for what’s next. Huge thanks to our community, contributors, and sponsors—you rock, and we can’t wait to see where we go from here.
