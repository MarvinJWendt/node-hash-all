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