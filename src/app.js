const crypto = require('crypto')


exports.forEachHash = function (string, fn) {

  for (let algo in crypto.getHashes()) {
    try {
      fn(crypto.createHash(crypto.getHashes()[algo]).update(string).digest('hex').toString(), crypto.getHashes()[algo])
    } catch (err) {
      throw err
    }
  }

}

exports.getHashes = function () {
  return crypto.getHashes()
}

exports.hashes = exports.getHashes()

exports.forEachHashInList = function (string, list, fn) {
  for (let hash in list) {
    try {
      fn(crypto.createHash(list[hash]).update(string).digest('hex').toString(), list[hash])
    } catch (err) {
      throw err
    }
  }

}
