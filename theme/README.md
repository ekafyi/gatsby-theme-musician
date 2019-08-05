<h1 align="center">
  Gatsby Theme Musician
</h1>

<p align="center">
	<em>A Gatsby theme for bands and music artists</em> 🎸🎙
</p>

<p align="center">
	<a href="https://gatsby-theme-musician.netlify.com" rel="external">
    <img src="https://raw.githubusercontent.com/ekafyi/gatsby-theme-musician/master/screenshot_with_bg.png" alt="Demo Site thumbnail">
  </a>
</p>

## Features

- ⏱ Have a landing page up and running in minutes
- 🔎 Optimized for SEO and social sharing
- 📱 Mobile-friendly
- ️⚡️ Fast and performant, with and without Javascript
- 🤓 Write as little _or_ as much code as you want
- 🙌🏽 Better with others—endless combination with other Gatsby themes (blog, ecommerce, photo galleries...)
- 📝 Write your content in plain text, Markdown, HTML elements, and React components thanks to [MDX](https://www.gatsbyjs.org/docs/mdx/)
- 💅🏽 Customizable, versatile design tokens-based styling with [Theme UI](https://theme-ui.com/)

Read [introductory post on DEV.to](https://dev.to/ekafyi/make-a-landing-page-for-your-band-in-30-minutes-with-gatsby-theme-musician-2227)

---

💡 _If you have never used Gatsby before, head to their [quick start guide](https://www.gatsbyjs.org/docs/quick-start/) or [beginner-friendly tutorials](https://www.gatsbyjs.org/tutorial/)._

## 📦 Installation

### Option A: Use the starter to create a _new_ site

🚧 IN PROGRESS 🚧

### Option B: Manually add to your existing site

```sh
npm install --save gatsby-theme-musician
# or
yarn add gatsby-theme-musician
```

Add the theme to the `plugins` array in your `gatsby-config.js`:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-musician",
    },
  ],
}
```

Start your site. (This step will copy the necessary theme files to your site.)

```sh
gatsby develop
```

## 🛠 Usage

### 1) Theme options

| Key           | Default value | Description               |
| ------------- | ------------- | ------------------------- |
| `basePath`    | `/`           | Root url for landing page |
| `contentPath` | `content`     | Location of data files    |

Example:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-musician`,
      options: {
        // Your site will run at http://localhost:8000/my-band
        basePath: `my-band`,
      },
    },
  ],
}
```

### 2) Theme configuration

Configuration files are located in `src/gatsby-theme-musician/config`. They use the [YAML format](https://yaml.org/start.html). These are where you edit theme-specific details such as artist data and site navigation.

```sh
config
├── artist.yml # Artist data
├── navigation.yml # Site navigation links
└── text_labels.yml # Site text labels
```

💡 See [Theme Config documentation](https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-configuration) for more details.

### 3) Content

By default, content files are located in `content` unless you specify a different path in the [theme options](#theme-options).

```sh
content
├── artist-landing-page.mdx
├── images
│   ├── favicon.png
│   └── placeholder.png
├── releases.yml
├── sample-page.mdx
└── shows.yml
```

Optionally, you may add images in PNG or JPG format with the following file names.

- `artist-banner.png|jpg` — displayed in top full-width banner
- `artist-logotype.png|jpg` — displayed in header (in place of artist name)
- `artist-social.png|jpg` — used in SEO and social thumbnail metadata

💡 See [Content documentation](https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#content) for more details.

---

<p align="center">
	Have fun! 🤘🏽
</p>
