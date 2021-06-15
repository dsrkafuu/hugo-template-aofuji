# 🍥 Aofuji 🍥

![RELEASE](https://img.shields.io/github/v/release/dsrkafuu/hugo-template-aofuji?style=flat-square)
![BUILD STATUS](https://img.shields.io/github/workflow/status/dsrkafuu/hugo-template-aofuji/deploy?style=flat-square)
![CODE SIZE](https://img.shields.io/github/languages/code-size/dsrkafuu/hugo-template-aofuji?style=flat-square)
![LICENSE](https://img.shields.io/github/license/dsrkafuu/hugo-template-aofuji?style=flat-square)

Aofuji is a clean Hugo template for developers with useful basic features.

The template is not a fully featured Hugo theme, it is designed to provide a base theme design and architecture for developers to use in their projects.

> Check out my other fully featured Hugo theme here: [hugo-theme-fuji](https://github.com/dsrkafuu/hugo-theme-fuji)

## Live Demo and Preview

![PREVIEW](/screenshot.jpg)

Live demo (GitHub Pages): <https://github.dsrkafuu.su/hugo-template-aofuji/>

## Getting Started

You need to configure [Node.js](https://nodejs.org/) (with npm) as well as [Hugo](https://gohugo.io/) before you can use the template, and Hugo requires the **extended version**.

You need to configure the environment variables correctly to ensure the `hugo` command can be used directly in command line.

After that, just click the "Use this template" button to create your own repository, then clone it and use `npm install` to install the dependencies.

Then the `npm start` for development and `npm run build` for deployment all work.

## Features List

Supported features:

- Post header image: Add `image` front matter in post `md` files
- Lazyload image: All listed images will be lazy-loaded, and there are also shortcodes for lazy image placeholders with specific aspect ratios.
- Sticky sidebar card: Add `div` with `sticky` class in sidebar
- Custom smart pagination
- Dark mode theme: Smart switch

Features will not be supported officially:

- Comment: Too much different comment system, [Gitalk](https://github.com/gitalk/gitalk) is recommended for good theme fit
- Search: Use [Fuse.js](https://fusejs.io/) or [Vue.js](https://vuejs.org/)/[React.js](https://reactjs.org/) to create your own

## Development Information

Check the [project wiki](https://github.com/dsrkafuu/hugo-template-aofuji/wiki) for more information on development and design.

The content of the wiki is still relatively incomplete and is being added over time.

## LICENSE

The theme is released under the `Apache License 2.0`, for more information read the [LICENSE](https://github.com/dsrkafuu/hugo-template-aofuji/blob/master/LICENSE).

**Copyright © 2018-present DSRKafuU <https://dsrkafuu.su/>**
