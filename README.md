<h1 align="center">
  Gatsby Theme Musician
</h1>

<p align="center">
	<em>A Gatsby theme for bands and music artists</em> 🎸🎙
</p>

## Features

- asdasd
- asdsadsad
- asdasdsa
- asdasdsa

---

## Installation

### 1) Prepare your Gatsby site

Open your existing site _or_ create a new one. If you have never used Gatsby before, head to their [quick start guide](https://www.gatsbyjs.org/docs/quick-start/) or [beginner-friendly tutorials](https://www.gatsbyjs.org/tutorial/).

### 2) Add theme to your site

Install the theme by running

```sh
npm install --save gatsby-theme-musician
```

or

```sh
yarn add gatsby-theme-musician
```

Add the theme to the `plugins` array in your `gatsby-config.js`:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-musician",
      options: {}, // See "Usage" section below
    },
  ],
}
```

### 3) Start your site

```sh
gatsby develop
```

The theme will copy the necessary theme files into your site folder.

You can access your site at http://localhost:8000

### 4) Edit and add content!

Add your content, add extra pages, combine with other themes if you want!

See "Usage" section below for more information.

### 5) Deploy

See Gatsby's [guide for deploying your site](https://www.gatsbyjs.org/docs/preparing-for-deployment/)

---

## Usage

### 1) Theme Options

| Key           | Default value | Description               |
| ------------- | ------------- | ------------------------- |
| `basePath`    | `/`           | Root url for landing page |
| `contentPath` | `content`     | Location of data files    |

Example usage:

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

### 2) Theme Configuration

Configuration files are located in `src/gatsby-theme-musician/config`. They are automatically created when you run your site after installing the theme.

```sh
config
├── artist.yml # Artist data
├── navigation.yml # Site navigation links
└── text_labels.yml # Site text labels
```

💡 Learn more [about the YAML format](https://yaml.org/start.html) here.

##### artist.yml

This file contains artist details such as name, contact, and SEO-related data. This is the one file you'd definitely want to edit 😉.

Only `name` is required; everything else is optional.

```yaml
# artist.yml

# Remove the poundsign (#) at the beginning of the line to fill the value
# Twitter username must begin with @ and wrapped in quotation marks

artist:
  name: Your Awesome Band
  tagline: Short information about your group, new album, etc
  # seo_title:
  # seo_description:
  # contact_twitter_username: "@ekafyi"
  # contact_phone:
  # contact_email:

social:
  - name: Facebook
    url: https://facebook.com
  - name: Instagram
    url: https://instagram.com
  - name: Twitter
    url: https://twitter.com
  - name: Youtube
    url: https://youtube.com
  - name: Spotify
    url: https://spotify.com

site_language: en
```

##### navigation.yml

This file contains navigation links

```yaml
# navigation.yml
navigation:
  - text: Shows
    url: "#shows"
  - text: Releases
    url: "#releases"
  - text: Contact
    url: "#contact"
```

##### text_labels.yml

This file contains
Currently only to customize "Releases" and "Shows" section title.

### 3) Content

By default, content files are located in `content` folder unless you specify differently in the [Theme Options](#theme-options).

##### Page

##### Images

##### Releases

##### Shows

---

<p align="center">
	Have fun! 🤘🏽
</p>
