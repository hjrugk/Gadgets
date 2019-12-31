function toBinary(str, base) {
  str = str || "hjrugk"
  if(base == "0") {
    return str
  }
  let len = str.length
  let res = ""
  for(let i = 0; i < len; i++) {
    let binaryCode = str.charCodeAt(i).toString(base)
    res += binaryCode
  }
  return res
}