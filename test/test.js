import test from 'ava'
const testHash = require("test-hash")

const app = require('../src/app')

test('Get all hashes', t => {
  app.getHashes().forEach(hash => {
    console.log(hash)
  })
  t.pass()
})

test('Hashing all accepted hashes and testing them', t => {
  console.log(app.forEachHash('Hello World', (hash, algo) => {
    console.log(`(${algo}) - ${hash}`)
    if(testHash(hash, 'Hello World')) console.log('Working!')
    else {
      console.log('ERROR')
      t.fail(`${algo} failed to return the correct string!`)
    }
    console.log("")
  }))

  t.pass()

})