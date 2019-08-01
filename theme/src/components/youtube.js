/** @jsx jsx */
import { jsx } from "theme-ui"

function getIdFromUrl(url) {
  return url.split("?v=")[1].split("&")[0]
}

const videoStyle = {
  position: "relative",
  width: ["100%", null, null, 800],
  pb: ["56.25%", null, null, 450], // 16:9 ratio
  pt: 0,
  mx: "auto",
  my: [4, null, null, 5],
  height: 0,
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}

const Youtube = ({ videoId, url, videoTitle }) => (
  <div className="GtmYoutube" sx={videoStyle}>
    <iframe
      src={`https://www.youtube.com/embed/${getIdFromUrl(url) ||
        "sCluiViSnNA"}`}
      title={videoTitle || "YouTube video"}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Youtube
