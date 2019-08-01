/** @jsx jsx */
/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React from "react"
import Img from "gatsby-image"
import { Styled, jsx } from "theme-ui"

import ImgWrapper from "./img-wrapper"
import Icon from "./icon-by-name"

const ReleaseItem = ({ id, title, date, release_type, image, links }) => {
  return (
    <article
      key={id}
      className="GtmReleaseItem"
      sx={{
        ".GtmReleaseItem__cover": {
          borderRadius: 2,
        },
      }}
    >
      {image ? (
        <Img
          fluid={image.childImageSharp.fluid}
          alt="Album cover"
          className="GtmReleaseItem__cover"
        />
      ) : (
        <ImgWrapper
          className="GtmReleaseItem__cover GtmReleaseItem__cover--empty"
          sx={{ position: "relative" }}
        >
          <small
            sx={{
              position: "absolute",
              top: "calc(50% - 1rem)",
              width: "100%",
              textAlign: "center",
              color: "muted",
            }}
          >
            no cover image
          </small>
        </ImgWrapper>
      )}
      <Styled.h4 className="GtmReleaseItem__title" sx={{ mb: 0, mt: 2 }}>
        {title}
      </Styled.h4>
      <div
        className="GtmReleaseItem__date"
        sx={{ variant: "textStyles.itemSubheading" }}
      >
        {new Date(date).toLocaleDateString("en-GB", {
          year: "numeric",
        })}
        {release_type && <>&nbsp;&middot;&nbsp;{release_type}</>}
      </div>
      {links && (
        <div sx={{ variant: "textStyles.itemSubheading", mt: 2 }}>
          Listen:&nbsp;
          <Styled.ul
            sx={{
              variant: "textStyles.inlineTextList",
              display: "inline",
              lineHeight: 1.6,
            }}
          >
            {links.map(link => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  sx={{
                    textDecoration: "none",
                    display: "inline-block",
                    mx: ".375em",
                    fontWeight: 700,
                    color: "text",
                    "&:hover": {
                      color: "primary",
                    },
                    svg: {
                      verticalAlign: "middle",
                      marginTop: -1,
                    },
                  }}
                  rel="external nofollow"
                >
                  <Icon name={link.name.toLowerCase().replace(/\s/g, "")} />
                  &nbsp;{link.name}
                </a>
              )
            })}
          </Styled.ul>
        </div>
      )}
    </article>
  )
}

export default ReleaseItem
