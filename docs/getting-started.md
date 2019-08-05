# Getting Started

💡 _If you have never used Gatsby before, head to their [quick start guide](https://www.gatsbyjs.org/docs/quick-start/) or [beginner-friendly tutorials](https://www.gatsbyjs.org/tutorial/)._

### Option A: Use the starter to create a _new_ site

```sh
# create a new site at the directory "my-band-site"
gatsby new my-band-site https://github.com/ekafyi/starter-musician-theme

# go to the site directory
cd my-band-site

# start your site
gatsby develop
```

### Option B: Manually add to your existing site

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
    },
  ],
}
```

Start your site. (This step will copy the necessary theme files to your site.)

```sh
gatsby develop
```
