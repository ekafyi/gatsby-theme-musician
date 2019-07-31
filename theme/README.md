# Gatsby Theme Musician

A Gatsby theme for bands and music artists. 🎸

🚧 under construction 🚧


## Installation

```sh
npm install --save gatsby-theme-musician
```

## Usage

### Theme options

| Key           | Default value | Description               |
| ------------- | ------------- | ------------------------- |
| `basePath`    | `/`           | Root url for landing page |
| `showsPath`   | `shows`       | URL for Shows page        |
| `contentPath` | `content`     | Location of data files    |


#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-musician`,
      options: {
        // basePath defaults to `/`
        basePath: `/band`,
      },
    },
  ],
}
```