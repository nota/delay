module.exports = function (msec) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve)
  })
}
