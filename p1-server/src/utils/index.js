const isFalsy = (value) => value === 0 ? false : !value
// 清除空白query
const cleanObject = (object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    // TODO
    // @ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      // TODO
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

module.exports={
  cleanObject
}
