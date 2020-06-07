export const hasObjectAndLength = (parentObj, childObjKey) => {
  if (typeof parentObj[childObjKey] !== "undefined") {
    if (parentObj[childObjKey].length) {
      return true
    } else return false
  } else return false
}
