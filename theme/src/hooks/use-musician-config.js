/**
 * Get theme-specific configuration from `src/config` directory and
 * optional images with specific file names in content directory.
 */
import { graphql, useStaticQuery } from "gatsby"
import { hasObjectAndLength } from "../utils"

// Import theme-specific config files
import config from "../config/artist.yml"
import navigation from "../config/navigation.yml"

// Provide empty string as fallback
const artistObject = {
  name: "",
  tagline: "",
  seo_title: "",
  seo_description: "",
  contact_twitter_username: "",
  contact_phone: "",
  contact_email: "",
}

// = = =

const useMusicianConfig = () => {
  const artist = {
    ...artistObject,
    ...config.artist,
  }

  const social = hasObjectAndLength(config, "social") ? config.social : []

  const siteLanguage = config.site_language || "en"

  const images = useStaticQuery(imgQuery)

  // Combine and return
  const data = {
    artist,
    social,
    siteLanguage,
    images,
    navigation: navigation.navigation || [],
  }
  return data
}

export default useMusicianConfig

const imgQuery = graphql`
  query MusicianConfigQuery {
    bannerImg: imageSharp(fluid: { src: { regex: "/artist-banner./" } }) {
      fluid(cropFocus: ATTENTION) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    socialImg: imageSharp(resize: { src: { regex: "/artist-social./" } }) {
      resize(width: 600, height: 300) {
        src
      }
    }
    logoImg: imageSharp(fluid: { src: { regex: "/artist-logotype./" } }) {
      id
      fixed(height: 48) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`
