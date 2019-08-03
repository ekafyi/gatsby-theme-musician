# Usage

Table of Content

- [Theme options](#theme-options)
- [Theme configuration](#theme-configuration)
	- [artist.yml](#-artistyml)
	- [navigation.yml](#-navigationyml)
	- [text_labels.yml](#-text_labelsyml)
- [Content](#content)
	- [Text data](#text-data)
		- [releases.yml](#-releasesyml)
		- [shows.yml](#-showsyml)
		- [artist-landing-page.mdx](#-artist-landing-pagemdx)
	- [Images](#images)
	- [Creating additional pages](#creating-additional-pages)

---

## Theme options

You can define the `basePath` and `contentPath` through the theme options.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-musician`,
      options: {
        // Default is `/`
        basePath: `my-band`,
        // Default is `content`
        contentPath: `data`,
      },
    },
  ],
}
```
[↑ back to top](#usage)

## Theme configuration

Configuration files are located in `src/gatsby-theme-musician/config`. They use the [YAML format](https://yaml.org/start.html).

```sh
config
├── artist.yml # Artist data
├── navigation.yml # Site navigation links
└── text_labels.yml # Site text labels
```

#### 📄 artist.yml

This file contains data about the artist, which are displayed in the UI (header, banner, social links) and used in various site metadata.

Remove the poundsign `#` to enable a line.

```yaml
artist:
  name: Your Awesome Band

  # Tagline displayed in banner
  tagline: Short information about your group, new album, etc

  # seo_title:
  # seo_description:
  # contact_twitter_username:
  # contact_phone:
  # contact_email:

# Social links displayed in banner, footer, and in metadata
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

# Site language for SEO metadata
site_language: en
```

The only required field is `artist.name`. You can have the site running with this `artist.yml`.

```yaml
artist:
  name: Your Awesome Band
```

You can use `seo_title` and `seo_description` to tailor the copy text into something more descriptive for search engines and external (social) sharing.

- `seo_title`

   Used in `<title>`, OpenGraph `og:title` meta tag, Twitter `twitter:title` meta tag

- `seo_description`

  Used in `description` meta tag, OpenGraph `og:description` meta tag, Twitter `twitter:description` meta tag

- `contact_twitter_username`

  Used in `twitter:site` and `twitter:creator` meta tags. Do NOT include the `@` sign.

- `contact_phone` and `contact_email`

  Used in the JSON-LD structured data as the `contactPoint`

If `seo_title` and `seo_description` are not provided, artist `name` and `tagline` are used instead. If contact-related data are not provided, they are omitted from the metadata. 

Learn more:

- [OpenGraph markup — Facebook Webmasters](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter card markup — Twitter Developer](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image)
- [Structured data — Google Search Guides](https://developers.google.com/search/docs/guides/intro-structured-data)

#### 📄 navigation.yml

This file contains items for the site navigation displayed in the header.

```yaml
navigation:
  - text: Shows
    url: "#shows"
  - text: Releases
    url: "#releases"
  - text: Contact
    url: "#contact"
  # You can add any link, including external links
  - text: Patreon
    url: "https://patreon.com/some-account"
```

Note:

- `url` values for `#shows` and `#releases` refer to the anchor in the theme’s components. If you use the theme’s _Releases_ and _Shows_ sections, do not change the `url`. (You can still change the `text` as you wish!)
- ⚠️ Do NOT leave this file blank. If you don’t want any navigation link, you can either leave it like below OR (recommended) [shadow](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) the `header` component. If you delete the file, theme default will be used.

```yaml
navigation:
  - text:
    url: ""
```

#### 📄 text_labels.yml

This file contains text labels used in the site.

```yaml
section_releases_title: Releases
section_shows_title: Shows
```

For example, if you want to call the section **Discography** instead of **Releases**, or **Tour Dates** instead of **Shows**, this is the place to do it.

- ️⚠️ Do NOT leave this file blank. If you delete the file, theme default will be used.

[↑ back to top](#usage)

## Content

Content files are located in `content`, unless you specify a different path in the [theme options](#theme-options). This is where you are going to add any additional files and folders for your site content. By default, this folder contains three text files and an image folder.

```sh
content
├── artist-landing-page.mdx
├── images
│   ├── favicon.png
│   └── placeholder.png
├── releases.yml
└── shows.yml
```

### Text data

#### 📄 releases.yml

This file contains entries for the **“Releases”** section. Each entry consists of the following:

```yaml
- title: Your Album/Single Title

  # Release date in yyyy-mm-dd format
  date: 2019-01-01

  # Release type (Album, EP, Single, etc)
  release_type: Album

  # Cover image path (relative to your content folder)
  image: "./images/placeholder.png"

  # Links to listen/buy/stream the release
  links:
    - name: Spotify
      url: https://open.spotify.com/album/some-id
    - name: Apple
      url: https://music.apple.com/us/album/some-title
```

Notes:

- The day and month part of `date` is not displayed but is used to sort the releases (newest first—regardless of the order you write them in the file). If you don’t have another release from the same year, any date and month is fine _as long as they use the correct format_, eg. `2019-01-01`.
- For the `image` field, add the release artwork image to your `content` folder.
  - You may add your image anywhere in the folder; in root `content` folder or any subdirectory. Just don’t forget to refer to your image accordingly, eg. `image: "./artworks/image-file-name.png"` (if you have your image in `content/artworks`).
- Each `links` may consist of one or multiple items, such as streaming platforms, your record label’s website, or any other place people can listen to or buy that release. At the moment, at least ONE entry in this file must have at least one `links` item.

* ⚠️ Do not delete this file or leave it blank. If you don't want to display this section, remove it from `artist-landing-page.mdx`.

#### 📄 shows.yml

This file contains entries for the **“Shows”** section.

```yaml
- name: Aliquam erat volutpat with Etiam Egestas

  # Show date in yyyy-mm-dd format
  date: 2019-08-10

  # Show venue
  location: Inner Alehouse, 2545 Parrish Avenue, Rocky Creek

  # Link to page containing more info, RSVP, ticketing, etc
  info_url: https://some-website.com

  # Link to location map
  map_url: https://maps.google.com
```

Notes:

- At the moment, at least ONE entry in this file must have `info_url` and `map_url`. Other fields are required for all entries.
- ⚠️ Do not delete this file or leave it blank. If you don't want to display this section, remove it from `artist-landing-page.mdx`.

#### 📄 artist-landing-page.mdx

This is the landing page template automatically created by the theme. You can add, remove, reorder any content in this page beyond the `<!-- Start editing here -->` line.

This page uses [the MDX format](https://mdxjs.com), a new format that enables JSX in Markdown. As such, you can write regular text as well as any valid JSX (both native HTML elements and React components).

```markdown
<!-- Start editing here -->

You can write regular text. Standard Markdown formatting such as **bold**, _italic_, or [hyperlink](https://github.com/ekafyi/gatsby-theme-musician) is supported.

Since native HTML elements are valid JSX, you <em>can</em> use them here. However do note JSX-specific gotchas such as <span style={{ padding: 10, background: 'lightblue' }}>using style object</span> for inlining CSS styles.

<Container>

This theme has some components you can use out-of-the-box, such as `<Container>` and `<Youtube>`. You can see them in action in the default landing page.

</Container>

You can use any other React components by installing (if using external package) and importing them yourself.
```

To learn more about using Components in this theme, [go to the Components page](docs/components.md).

### Images

Optionally, you may add the following images to your content folder.

| File name                | Description                                                   | Specifications                                                                                              |
| ------------------------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| artist-banner.png\|jpg   | Displayed in banner as background image                       | Landscape orientation, any aspect ratio. Minimum width 1366 px.                                             |
| artist-logotype.png\|jpg | Displayed in header in place of artist name                   | Landscape or square orientation, any aspect ratio. No size requirement but will be resized to 48 px height. |
| artist-social.png\|jpg   | Used in metadata for social share thumbnail                   | Landscape orientation, aspect ratio 2:1. Minimum width 400 px.                                              |
| favicon.png              | Displayed in browser title bar and desktop/mobile home screen | Square. Minimum 512x512 px.                                                                                 |

Notes:

- You may upload images of any ratio or orientation, but they will be cropped to the specs above.
- ⚠️ If you deploy to Netlify, avoid large images > 1MB as they may break the build process.

### Creating additional pages

You may add custom pages by creating a MDX file in `src/pages`. For example, if you create `press.mdx`, the page will be created at http://localhost:8000/press.

🔮 **In progress:** You will be able to add pages in the `content` folder so they are all in one place.

[↑ back to top](#usage)
