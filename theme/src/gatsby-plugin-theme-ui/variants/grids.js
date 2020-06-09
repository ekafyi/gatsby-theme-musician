const minAlbumWidth = ["14rem", "16rem"]
const maxOnlyAlbumWidth = "24rem"

const releasesShared = {
  gridTemplateColumns: [
    null,
    `repeat(auto-fit,minmax(${minAlbumWidth[0]}, 1fr))`,
    `repeat(auto-fit,minmax(${minAlbumWidth[1]}, 1fr))`,
  ],
  gridGap: ["1rem", "calc(1rem + 1vw)", null, "1.5rem"],
  ">*:only-child": {
    width: "100%",
    maxWidth: maxOnlyAlbumWidth,
    mx: "auto",
  },
  // for testing
  // ">*": {
  //   backgroundColor: `tomato`,
  // },
}

export default {
  releases: {
    ...releasesShared,
  },
  // If there are 2 releases, center them.
  twoReleases: {
    ...releasesShared,
    maxWidth: `calc(2 * ${maxOnlyAlbumWidth})`,
    mx: `auto`,
  },
  //
}
