/**
 * Get theme-specific configuration from `src/config` directory and
 * optional images with specific file names in content directory.
 */
import { graphql, useStaticQuery } from "gatsby"
import { hasObjectAndLength, artistObject } from "../utils"

// Import theme-specific config files
import config from "../config/artist.yml"
import navigation from "../config/navigation.yml"

// = = =

const useMusicianConfig = () => {
  const artist = {
    ...artistObject,
    ...config.artist,
  }

  const social = hasObjectAndLength(config, "social") ? config.social : []

  const images = useStaticQuery(imgQuery)

  // Combine and return
  const data = {
    artist,
    social,
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
    fallbackSocialImg: imageSharp(
      resize: { src: { regex: "/artist-banner./" } }
    ) {
      resize(width: 600, height: 300) {
        src
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
