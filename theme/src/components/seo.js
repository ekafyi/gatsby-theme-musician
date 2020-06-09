import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useMusicianConfig from "../hooks/use-musician-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import { getStructuredData, getTwitterMeta, getImageMeta } from "../utils"

const SEO = ({ pageTitle, pageDescription, pageUrl, pathname }) => {
  const { artist, social, images } = useMusicianConfig()
  const { title, description, siteUrl, siteLanguage } = useSiteMetadata()

  /**
   * Get url from siteMetadata.siteUrl + (optional) pathname.
   * Will be overridden if user supplies pageUrl via props.
   */
  const url = `${siteUrl}${pathname || ""}`

  /**
   * Get siteTitle from... (order of preference)
   * 1. artist.seo_title from config
   * 2. siteMetadata.title (only if user-defined)
   * 3. artist.name from config
   */
  let siteTitle = title !== "Gatsby Theme Musician" ? title : artist.name
  if (artist.seo_title) {
    siteTitle = artist.seo_title
  }

  /**
   * Get siteDescription from ... (order of preference)
   * 1. artist.seo_description from config
   * 2. siteMetadata.description
   * Will be overridden if user supplies pageDescription via props.
   */
  const siteDescription = artist.seo_description || description

  /**
   * Get socialImgPath from...
   * 1. social image file
   * 2. banner image file (fallback)
   * If no image at all, image metadata will not be rendered by getImageMeta().
   */
  const { socialImg, fallbackSocialImg } = images
  let socialImgPath = ""
  if (socialImg || typeof fallbackSocialImg.resize !== "undefined") {
    socialImgPath = socialImg || fallbackSocialImg.resize.src
  }

  return (
    <Helmet
      // Site language
      htmlAttributes={{
        lang: siteLanguage,
      }}
      // If page title is not provided, use this
      defaultTitle={siteTitle}
      // If component provides page title, use this with titleTemplate
      title={pageTitle}
      // Use this template to show in page title
      titleTemplate={`%s | ${siteTitle}`}
      // Meta tags
      meta={[
        /**
         *Title (OpenGraph, Twitter)
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
         * Description (HTML meta, OpenGraph, Twitter)
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
         * Image (OpenGraph, Twitter)
         */
        ...getImageMeta(socialImgPath),

        /**
         * Other (OpenGraph, Twitter)
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
          content: siteLanguage,
        },
        {
          property: `og:url`,
          content: pageUrl || url,
        },
        ...getTwitterMeta(artist.contact_twitter_username || ""),
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify(
          getStructuredData(
            artist.name,
            siteUrl,
            socialImgPath,
            social,
            artist.contact_email,
            artist.contact_phone
          )
        )}
      </script>
    </Helmet>
  )
}

SEO.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageUrl: PropTypes.string, // If no url is provided, we use metadata.siteUrl + pathname
  pathname: PropTypes.string,
  // meta: PropTypes.array, // Currently user cannot supply custom metadata array
}

export default SEO
