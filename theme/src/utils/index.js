export const hasObjectAndLength = (parentObj, childObjKey) => {
  if (typeof parentObj[childObjKey] !== "undefined") {
    if (parentObj[childObjKey].length) {
      return true
    } else return false
  } else return false
}

export const artistObject = {
  name: "",
  tagline: "",
  seo_title: "",
  seo_description: "",
  contact_twitter_username: "",
  contact_phone: "",
  contact_email: "",
}

/**
 * Metadata stuff
 */

export const schemaObject = {
  "@context": "http://schema.org",
  "@type": "MusicGroup",
  name: "",
  url: "",
  image: [],
  sameAs: [],
}

export const getStructuredData = (
  name, // required
  url, // required
  imagePath = "",
  social = [],
  email = "",
  phone = ""
) => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "MusicGroup",
    name,
    url,
  }
  if (imagePath) {
    schema.image = []
    schema.image[0] = imagePath
  }
  if (social.length) {
    schema.sameAs = []
    social.forEach((item, index) => {
      if (hasObjectAndLength(item, "url")) {
        schema.sameAs[index] = item.url
      }
    })
  }
  if (email || phone) {
    const contactObject = {
      "@type": "ContactPoint",
      contactType: "sales",
    }
    if (email) {
      contactObject.email = email
    }
    if (phone) {
      contactObject.telephone = phone
    }
    schema.contactPoint = { ...contactObject }
  }
  return schema
}
//

export const getTwitterMeta = (twitterName = "") => {
  if (!twitterName) return []
  return [
    {
      name: `twitter:site`,
      content: twitterName.replace("@", ""),
    },
    {
      name: `twitter:creator`,
      content: twitterName.replace("@", ""),
    },
  ]
}

export const getImageMeta = (path = "") => {
  if (!path)
    return [
      {
        name: `twitter:card`,
        content: `summary`, // Use "summary|summary_large_image" based on image existence.
      },
    ]
  return [
    {
      property: `og:image`,
      content: path,
    },
    {
      name: `twitter:image`,
      content: path,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
  ]
}
