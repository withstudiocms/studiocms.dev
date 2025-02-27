---
title: "Beta 8 Release"
description: "StudioCMS 0.1.0-beta.8 is being released."
publishDate: 2025-02-28
ogVariant: green-accent
author: paul-valladares
---

As we step into 2025, StudioCMS is excited to announce the release of version `0.1.0-beta.8`, a major milestone that builds on our progress from 2024. This update introduces significant enhancements, making it easier for developers to manage content within the Astro ecosystem. Let’s explore what’s new and how it can benefit you.

## What’s New in Beta.8

StudioCMS 0.1.0-beta.8 brings several exciting features:

**Redesigned Dashboard:** The dashboard has been completely revamped using the `@studiocms/ui` library, offering a modern, intuitive interface for managing content. This unexpected improvement enhances usability, making navigation smoother for developers.

**Auth System Overhaul:** Security is tighter with a new authentication system using lucia-next, new encryption (requiring a CMS_ENCRYPTION_KEY), and support for multiple oAuth providers. Login and signup pages have a fresh look with backgrounds, improving user experience.

**Headless CMS Model:** StudioCMS now focuses on backend functionalities, giving you flexibility to integrate with any frontend framework. For headful setups, the `@studiocms/blog` plugin is recommended, offering a complete solution.

**Dynamic Sitemaps:** This feature automatically generates sitemaps, improving your website’s search engine optimization (SEO) and ensuring content is discoverable.

**User Management Enhancements:** New features for creating users and sending invites simplify team collaboration, with an updated UI for better clarity.

**Plugin System and i18n:** A basic plugin system allows custom extensions, and internationalization (i18n) support makes StudioCMS accessible to a global audience, with tools like a LanguageSelector component.

These updates reflect our commitment to providing a robust, flexible CMS for developers.

## Comparative Analysis: Beta.7 vs. Beta.8

To highlight the advancements, here’s a comparison of key features between the last release, `0.1.0-beta.7`, and the new `0.1.0-beta.8`, based on available release notes and changelog:

| Feature | Beta.7 (Sep 24, 2024) | Beta.8 (Feb 27, 2025) |
| --- | --- | --- |
| Authentication System | Lucia-based, with basic oAuth support | Overhauled with lucia-next, new encryption, multiple oAuth |
| Dashboard | Standard UI, basic navigation | Completely redesigned using `@studiocms/ui`, modern interface |
| CMS Model | Headful, integrated routes | Headless, with `@studiocms/blog` for headful setups |
| Sitemaps | Static integration | Dynamic sitemaps for improved SEO |
| User Management | Basic user creation | Enhanced with invites, updated UI |
| Plugin System | Limited, basic support | Basic system introduced, expandable |
| Internationalization | Minimal, no dedicated system | Full i18n support with LanguageSelector |

This table, derived from the GitHub releases and pull request, illustrates the significant upgrades in beta.8, enhancing functionality and user experience.

## Future Outlook and Community Engagement

Looking ahead, StudioCMS is committed to further development, focusing on stability, performance, and user experience. The project aims to expand the plugin ecosystem, improve documentation, and foster community growth, as evidenced by active engagement on platforms like Discord, mentioned in StudioCMS GitHub Repository. The sponsorship from Turso.tech and the move to an independent organization position StudioCMS for sustained growth, ensuring it remains a vital tool for Astro developers.

We invite the community to contribute through bug reports, feature requests, and code contributions, as outlined in Welcome to StudioCMS | StudioCMS, fostering a collaborative environment to shape the future of StudioCMS.

This is a testament to our dedication to providing a robust, open-source CMS for the Astro ecosystem. Reflecting on 2024’s achievements and introducing these new features, we are excited about the potential for future innovations. We extend our gratitude to our community, contributors, and sponsors for their support, and look forward to continuing this journey together.
