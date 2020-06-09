export const landingSectionSpacing = [
  5,
  null,
  "calc(3rem + 4vw)",
  null,
  null,
  5,
]

export default {
  py: landingSectionSpacing,
  "& + &": {
    pt: 0,
  },
  "& + hr": {
    mt: 0,
  },
  "hr + &": {
    mt: "calc(-2rem - 2vw)",
  },
}
