# KESMO

**Version 1.0.0**

The official website and public tool directory for KESMO.

> Precision made simple.

## Overview

This repository contains the official KESMO website at:

```text
https://kesmoworks.github.io/
```

The website serves as the central directory for published KESMO web tools.

Its primary purpose is simple:

* Introduce KESMO
* Help visitors find available tools
* Provide official About and Privacy pages
* Serve as the destination for every **All KESMO Tools** link

The homepage is intentionally minimal. It should remain focused on helping visitors find and open useful KESMO tools without unnecessary content or complexity.

## Current Status

KESMO Home v1.0.0 is live and publicly available.

The current website includes:

* Home and tool directory
* About KESMO page
* Privacy Policy
* Custom 404 page
* Shared Header, Hero, and Footer
* Search-engine metadata
* Social-sharing metadata
* Structured data
* `robots.txt`
* `sitemap.xml`
* Mobile-first responsive design
* Accessibility features
* GitHub Pages hosting

The KESMO Pricing Calculator is the first tool listed in the public directory.

## Purpose

KESMO Home is the central point of entry for the KESMO ecosystem.

It is not intended to be:

* A blog
* A news site
* A documentation portal
* A complicated marketing website
* A development template

Its purpose is to provide a fast, clear, dependable place where visitors can find KESMO tools.

## Technology

KESMO Home uses:

* HTML5
* CSS3
* Vanilla JavaScript
* SVG branding assets
* GitHub Pages

It does not require:

* A framework
* A package manager
* A build process
* Paid hosting
* Third-party runtime dependencies

## Repository Structure

```text
kesmoworks.github.io
│
├── index.html
├── about.html
├── privacy.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── styles.css
├── script.js
├── components.js
├── README.md
├── CHANGELOG.md
│
├── .github/
│   └── workflows/
│
└── assets/
    └── branding/
        ├── logo.svg
        ├── favicon.svg
        └── kesmo-social-share.png
```

Git does not track empty folders. Optional asset folders such as `images`, `icons`, and `screenshots` do not need to exist until they contain files.

## Site Architecture

Shared page components are managed by `components.js`.

The standard page structure is:

```text
Page
├── Shared Header
├── Shared Hero
├── Page-specific content
└── Shared Footer
```

The shared components are:

* Header
* Hero
* Footer

Each standard page includes placeholders such as:

```html
<div id="site-header"></div>

<main id="main-content">
  <div
    id="page-hero"
    data-eyebrow="..."
    data-title="..."
    data-description="..."
  ></div>

  <!-- Page-specific content -->
</main>

<div id="site-footer"></div>
```

The Hero supports:

* `data-eyebrow`
* `data-title`
* `data-description`
* `data-note`

## Configuration

Project-wide values are stored in the `KESMO_CONFIG` object inside `components.js`.

Current values identify this project as:

```javascript
repositoryName: "kesmoworks.github.io",
projectName: "KESMO",
version: "1.0.0",
```

The central site URL is:

```text
https://kesmoworks.github.io/
```

## Public Pages

### Home

`index.html`

The homepage is the public KESMO tool directory.

It contains:

* A short KESMO introduction
* A Tools section
* One manually maintained card for each published tool

### About

`about.html`

The About page explains:

* What KESMO is
* What kinds of tools KESMO builds
* KESMO’s approach to quality and simplicity
* KESMO’s guiding principles
* How to contact KESMO

### Privacy

`privacy.html`

The Privacy Policy describes the data practices of the central KESMO website.

Individual KESMO tools maintain separate Privacy Policies when their features, storage, analytics, advertising, or third-party services differ.

### 404

`404.html`

The custom 404 page helps visitors return to:

* KESMO Home
* About KESMO
* The KESMO Privacy Policy

The 404 page is not included in `sitemap.xml`.

## Maintaining the Tool Directory

Tool cards are added manually to `index.html`.

They are not generated through the GitHub API or another external service.

This is intentional because manual cards:

* Work without JavaScript
* Require no external API
* Avoid API failures and rate limits
* Give complete control over titles and descriptions
* Allow deliberate ordering
* Keep the website simple and dependable

When publishing a new KESMO tool:

1. Publish the tool.
2. Verify that its public site works.
3. Add a new tool card to `index.html`.
4. Link the card to the tool’s public URL.
5. Write a short, evergreen description.
6. Test the card on mobile and desktop.
7. Update `sitemap.xml` only when the KESMO Home site itself gains a new public page.

Each individual tool should maintain its own sitemap.

## Adding a Tool Card

Use the existing tool card as the pattern.

Example:

```html
<article class="feature-card">
  <h3>
    KESMO Tool Name
  </h3>

  <p>
    A short description of the tool and the problem it solves.
  </p>

  <p>
    <a
      class="button button-primary"
      href="https://kesmoworks.github.io/REPOSITORY-NAME/"
    >
      Open Tool
    </a>
  </p>
</article>
```

Keep descriptions short, clear, and useful.

Do not add placeholders for unpublished tools.

## Relationship to Other KESMO Repositories

### KESMO Starter Kit

The KESMO Starter Kit is the reusable development template and source of truth for shared KESMO architecture, branding, and components.

Repository:

```text
https://github.com/KESMOWorks/KESMO-Starter-Kit
```

The Starter Kit:

* Is a GitHub template repository
* Is not a public KESMO product
* Does not have an active GitHub Pages site
* Should be improved first when a change benefits multiple projects

### KESMO Pricing Calculator

The KESMO Pricing Calculator is the first published KESMO tool.

Public site:

```text
https://kesmoworks.github.io/pricing-calculator/
```

Repository:

```text
https://github.com/KESMOWorks/pricing-calculator
```

### Future Tools

Future KESMO tools should be created from the Starter Kit template.

After a tool is complete and published, it should be added to the KESMO Home directory.

## Shared Development Workflow

When an improvement benefits more than one KESMO project:

1. Improve the KESMO Starter Kit.
2. Verify the improvement.
3. Apply it to existing KESMO projects.
4. Use the updated Starter Kit for future tools.

When an improvement is first proven in an existing tool, copy it back into the Starter Kit before treating it as a shared standard.

### Local Development

KESMO Home development is performed locally in Visual Studio Code.

The local repository is the active development workspace. The GitHub repository remains the source of truth for the latest published version, and this README is the development source of truth for the project.

Do not assume that a local change is published until it has been committed, pushed to GitHub, and the GitHub Pages deployment has been verified.

For normal development:

1. Clone the repository from GitHub, or pull the latest changes if it has already been cloned.
2. Open the local repository in Visual Studio Code.
3. Make changes locally.
4. Preview the site with the Microsoft Live Preview extension for Visual Studio Code.
5. Test the complete change locally before publishing.
6. Run `git status` and review the modified files.
7. Stage the completed changes with `git add .`.
8. Commit the completed work with a clear message using `git commit -m "Relevant update"`.
9. Push the commit with `git push origin main`.
10. Run `git status` again and confirm that the working tree is clean.
11. Verify the GitHub Pages deployment when it becomes available.
12. Update the README, CHANGELOG, version, release, or tag when appropriate.

The standard Git publishing sequence is:

```bash
git status
git add .
git commit -m "Relevant update"
git push origin main
git status

## Design Standards

KESMO Home follows the shared KESMO design language:

* Mobile-first responsive layout
* Consistent KESMO branding
* Clear typography
* Consistent spacing
* Accessible color contrast
* Visible keyboard focus states
* Semantic HTML
* Fast loading
* Minimal dependencies
* Shared Header, Hero, and Footer
* Professional supporting pages

The site should remain intentionally simple.

Changes that add complexity should only be accepted when they provide clear, lasting value.

## Accessibility Standards

The website should maintain:

* A working skip link
* One primary page heading
* Semantic landmarks
* Logical heading order
* Keyboard-accessible navigation
* Visible focus states
* Accessible link and button labels
* Reduced-motion support
* High-contrast support where practical
* Responsive layouts without horizontal overflow

## Search and Social Standards

Every public page should include:

* A descriptive page title
* A useful meta description
* A correct canonical URL
* Open Graph metadata
* X/Twitter Card metadata
* Structured data where appropriate
* A favicon
* A social-sharing image

Search files must remain accurate:

* `robots.txt` allows indexing.
* `robots.txt` lists the KESMO Home sitemap and the sitemap for each published KESMO tool.
* `sitemap.xml` contains only public KESMO Home pages.
* `404.html` is excluded from the sitemap.

## Publishing Workflow

Before publishing changes:

* [ ] Verify the Home page.
* [ ] Verify the About page.
* [ ] Verify the Privacy page.
* [ ] Verify the custom 404 page.
* [ ] Test Header, Hero, and Footer rendering.
* [ ] Test mobile and desktop layouts.
* [ ] Test keyboard navigation.
* [ ] Test the skip link.
* [ ] Test all tool cards.
* [ ] Test Header and Footer navigation.
* [ ] Test the support email link.
* [ ] Verify canonical URLs.
* [ ] Verify social metadata.
* [ ] Verify structured data.
* [ ] Verify `robots.txt`.
* [ ] Verify `sitemap.xml`.
* [ ] Check for broken links.
* [ ] Check the browser console for errors.
* [ ] Update the README and CHANGELOG when appropriate.

## Version Information

### Version 1.0.0

Initial public release of KESMO Home.

Included:

* Official KESMO website
* Central KESMO tool directory
* KESMO Pricing Calculator listing
* Home page
* About page
* Privacy Policy
* Custom 404 page
* Shared Header, Hero, and Footer
* Mobile-first responsive design
* Accessibility defaults
* Search and social metadata
* Structured data
* Search indexing configuration
* GitHub Pages deployment

## Roadmap

### Next

* Add each completed KESMO tool to the public directory.
* Begin Tool #2 from the KESMO Starter Kit template.
* Keep the homepage focused on tool discovery.

### Later

* Improve shared components only when repeated needs are identified.
* Add tool-specific social images where useful.
* Update KESMO Home as the published tool collection grows.
* Preserve the simple HTML, CSS, and JavaScript architecture.

## Release Standard

A KESMO Home release is complete only when:

* The website works.
* Every listed tool link works.
* The supporting pages work.
* Shared navigation works.
* Search configuration is accurate.
* Documentation is current.
* The repository matches this README.
* There are no known broken links.
* The website feels polished, dependable, and ready for visitors.



KESMO Thumbnail Template Prompt

Use the attached KESMO thumbnail as the design master and preserve its visual identity.

Do not redesign or reinterpret anything.

Keep exactly the same:

overall layout
blue gradient background
gold border
KESMO logo
logo size and position
typography style
colors
lighting
shadows
spacing
line thickness
visual hierarchy

Only change the following text:

Main Title:
Building KESMO

Episode Number:
#2

Subtitle:
Building a Break-Even Calculator

Do not add, remove, or move any other elements.
The finished image should look like the exact same branded thumbnail, with only the episode number and subtitle updated.


Step 12: Create your channel trailer plan

Don't record it yet.

I just want you to create a private note (Notepad is fine) with a rough outline.

I'd keep it under 90 seconds.

Something like:

Hi, I'm building KESMO.

KESMO creates free browser-based web tools that solve everyday problems.

On this channel, you'll see every tool built from scratch using HTML, CSS, JavaScript, GitHub Pages, and AI.

You'll also get a behind-the-scenes look at the development of CrownBound.

If you enjoy building software or want to follow the journey of a growing software company, subscribe and join me.
