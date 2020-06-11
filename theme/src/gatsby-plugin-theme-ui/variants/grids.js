const albumGrid = [null, "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]

const maxOnlyAlbumWidth = "24rem"

const releasesBase = {
  gridTemplateColumns: albumGrid,
  gridGap: ["1rem", "calc(1rem + 1.5vw)", null, "2rem"],
  ">*:only-child": {
    width: "100%",
    maxWidth: maxOnlyAlbumWidth,
    mx: "auto",
  },
}

export default {
  releases: {
    ...releasesBase,
  },
  // If there are 2 releases, center them.
  twoReleases: {
    ...releasesBase,
    maxWidth: `calc(2 * ${maxOnlyAlbumWidth})`,
    mx: `auto`,
  },
  //
}
