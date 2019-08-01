<h1 align="center">
  Gatsby Theme Musician
</h1>

<p align="center">
	<em>A Gatsby theme for bands and music artists</em> 🎸🎙
</p>

[![Demo Site thumbnail](https://raw.githubusercontent.com/ekafyi/gatsby-theme-musician/master/screenshot_with_bg.png)](https://gatsby-theme-musician.netlify.com)

## Features

- ⏱ Have a landing page up and running in minutes without creating a single component (unless you want to)
- 🔎 Optimized for SEO and social sharing
- 📱 Mobile-friendly
- ️⚡️ Fast and performant
- 🙌🏽 Better with others—combine with other Gatsby themes (blog, ecommerce, photo galleries...)
- 📝 Write your content in plain text, in Markdown, and/or React components thanks to [MDX](https://www.gatsbyjs.org/docs/mdx/)
- 💅🏽 Versatile customization with [Theme UI](https://theme-ui.com/)

---

## Installation

### 1) Prepare your Gatsby site

Open your existing site _or_ create a new one. If you have never used Gatsby before, head to their [quick start guide](https://www.gatsbyjs.org/docs/quick-start/) or [beginner-friendly tutorials](https://www.gatsbyjs.org/tutorial/).

The example below shows creating a new site in the folder `my-band-site` with the blank official Gatsby starter.

```sh
# create a new Gatsby site using the hello-world starter
gatsby new my-band-site https://github.com/gatsbyjs/gatsby-starter-hello-world

# go to the site folder
cd my-band-site

```

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

👀 **Note:** If you use a starter site or your site creates a page at root (`/`), you won’t be able to see the theme’s landing page. For example, if you use the starter site above, you will see the starter’s “Hello world” instead of the theme’s page when you run the site.

You can choose one of these options:

* Remove `src/pages/index.js` or  `src/pages/index.mdx` ,
or
- Change the `basePath` [theme option](#1-theme-options) to something else

### 4) Edit and add content!

Add your content, add extra pages, combine with other themes if you want!

See ["Usage"](#usage) section below for more information.

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

#### artist.yml

This file contains artist details such as name, contact, and SEO-related data. This is the one file you'd definitely want to edit 😉. Only `name` is required; everything else is optional.

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

#### navigation.yml

This file contains navigation links displayed in the site header. You can add any links, including external links. You must have _at least one item_ there.

```yaml
# navigation.yml
# Internal anchor URLs (#shows, #releases) will not work if you change the `url`
# You can, however, change the `text` (eg. Discography instead of Releases)

navigation:
  - text: Shows
    url: "#shows"
  - text: Releases
    url: "#releases"
  - text: Contact
    url: "#contact"
```

#### text_labels.yml

This file contains text labels that you can customize. Currently it only contains "Releases" and "Shows" section headings. They are both required.

```yaml
# text_labels.yml
section_releases_title: Releases
section_shows_title: Shows
```

### 3) Content

By default, content files are located in `content` folder unless you specify differently in the [Theme Options](#theme-options).

#### Page

One page is created for you, `artist-landing-page.mdx`. You can add, remove, reorder any content in this page beyond the `<!-- Start editing here -->` line. 👌🏾

You may add custom pages by creating a MDX file in `src/pages`. For example, if you create `press.mdx`, the page will be created at http://localhost:8000/press.

💡Learn more [about the MDX format](https://mdxjs.com).

#### Images

Optionally, you may add images in PNG or JPG format with the following file names to your content folder.

- artist-banner
  - Displayed in the top banner. Minimum 1600px wide, landscape ratio.
- artist-social
  - Used as thumbnail in social shares. Aspect ratio 2:1.
- artist-logotype
  - Used in place of artist name in the header.

#### Releases

⚠️ Do not delete this file or remove the whole content. If you don't want to display this section, remove it from `artist-landing-page.mdx`.

```yaml
# releases.yml

- title: Your Album Title

  # Release date in yyyy-mm-dd format
  date: 2019-01-01

  # Can be anything (Album, EP, Single)
  release_type: Album

  # Cover image (add the image to your content folder)
  image: "./placeholder.png"

  # Where people can listen/buy/stream
  # At least one item in this file must have links
  links:
    - name: Spotify
      url: https://open.spotify.com/album/5z8bPdGFiJx56cqsHTvWM9
    - name: Apple
      url: https://music.apple.com/us/album/daydream-nation-remastered/520504308
```

#### Shows

⚠️ Do not delete this file or remove the whole content. If you don't want to display this section, remove it from `artist-landing-page.mdx`.

```yaml
# shows.yml

- name: Example Show 1

  # Show date
  date: 2019-08-15

  # Show venue
  location: Some Nice Place, Your City

  # Link for more info, RSVP, ticket purchase
  info_url: https://some-event-page.com

  # Link to location map
  map_url: https://maps.google.com
```

---

<p align="center">
	Have fun! 🤘🏽
</p>
