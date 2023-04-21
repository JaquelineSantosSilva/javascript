function reverteString(str) {
  return str === '' ? '' : reverteString(str.substr(1)) + str.charAt(0)
}