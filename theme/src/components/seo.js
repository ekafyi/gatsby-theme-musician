/**
 * SEO component that queries for data
 *
 * https://www.gatsbyjs.org/docs/seo/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSiteMetadata from "../use-site-metadata"

// Prepare structured data object
const schema = {
  "@context": "http://schema.org",
  "@type": "MusicGroup",
  name: "",
  url: "",
  image: [],
  sameAs: [],
}

// Helper function to check user's YAML config
function hasObjectAndLength(parentObj, childObjKey) {
  if (typeof parentObj[childObjKey] !== "undefined") {
    if (parentObj[childObjKey].length) {
      return true
    } else return false
  } else return false
}

const SEO = ({ meta, pageTitle, pageDescription, url, twitterCardType }) => {
  /**
   * Prepare image from user's "content" folder
   */

  const socialImg = useSiteMetadata().socialImg
  let imagePath
  if (socialImg) {
    const filePath = socialImg.resize.src
    imagePath = useSiteMetadata().siteUrl + filePath
  }

  /**
   * Prepare custom data from YAML config files
   */

  const artist = useSiteMetadata().artist

  // siteTitle for SEO is taken from this order of preference:
  // 1. Custom `seo_title` in YAML config file, if it exists
  // 2. siteMetadata in user config, if it exists
  // 3. Artist name in user config, if it exists
  // 4. (if none exists) fallback to siteMetadata in theme config, "Gatsby Theme Musician"

  const defaultConfigTitle = "Gatsby Theme Musician"
  let siteTitle = useSiteMetadata().title
  if (siteTitle === defaultConfigTitle && hasObjectAndLength(artist, "name")) {
    siteTitle = artist.name
  }
  if (hasObjectAndLength(artist, "seo_title")) {
    siteTitle = artist.seo_title
  }

  let siteDescription = useSiteMetadata().description
  if (artist.hasOwnProperty("seo_description")) {
    siteDescription = artist.seo_description
  } else if (artist.hasOwnProperty("tagline")) {
    siteDescription = artist.tagline
  }

  let miscMetaTwitter = []
  if (artist.contact_twitter_username) {
    const twitterName =
      artist.contact_twitter_username.charAt(0) === "@"
        ? artist.contact_twitter_username
        : "@" + artist.contact_twitter_username
    miscMetaTwitter = [
      {
        name: `twitter:site`,
        content: twitterName,
      },
      {
        name: `twitter:creator`,
        content: twitterName,
      },
    ]
  }

  let lang = "en"
  if (hasObjectAndLength(useSiteMetadata(), "site_language")) {
    lang = useSiteMetadata().site_language
  }

  /**
   * Populate our JSON-LD structured data
   */

  schema.name = artist.name

  schema.image[0] = imagePath

  const social = useSiteMetadata().social
  if (social.length) {
    social.forEach((item, index) => {
      if (hasObjectAndLength(item, "url")) {
        schema.sameAs[index] = item.url
      }
    })
  }

  if (artist.contact_phone || artist.contact_email) {
    const contactObject = {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: artist.contact_phone.length ? artist.contact_phone : null,
      email: artist.contact_email.length ? artist.contact_email : null,
    }
    schema.contactPoint = { ...contactObject }
  }

  // url

  // end of data preparation

  return (
    <Helmet
      // Site language
      htmlAttributes={{ lang }}
      // If page title is not provided, use this
      defaultTitle={siteTitle}
      // If component provides page title, use this with titleTemplate
      title={pageTitle}
      // Use this template to show in page title
      titleTemplate={`%s | ${siteTitle}`}
      // Meta tags
      meta={[
        /**
         * Title
         * (OpenGraph, Twitter)
         */
        {
          property: `og:title`,
          content: pageTitle || siteTitle,
        },
        {
          name: `twitter:title`,
          content: pageTitle || siteTitle,
        },

        /**
         * Description
         * (HTML meta, OpenGraph, Twitter)
         */
        {
          name: `description`,
          content: pageDescription || siteDescription,
        },
        {
          property: `og:description`,
          content: pageDescription || siteDescription,
        },
        {
          name: `twitter:description`,
          content: pageDescription || siteDescription,
        },

        /**
         * Image
         * (OpenGraph, Twitter)
         */

        {
          property: `og:image`,
          content: imagePath || "",
        },
        {
          name: `twitter:image`,
          content: imagePath || "",
        },

        /**
         * Other details
         * (OpenGraph)
         */
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: siteTitle,
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          property: `og:url`,
          content: url,
        },

        /**
         * Other details
         * (Twitter)
         */
        {
          name: `twitter:card`,
          content: twitterCardType,
        },
        ...miscMetaTwitter,
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  twitterCardType: "summary_large_image",
}

SEO.propTypes = {
  meta: PropTypes.array,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  url: PropTypes.string,
  twitterCardType: PropTypes.oneOf([
    "summary",
    "summary_large_image",
    "app",
    "player",
  ]),
}

export default SEO
