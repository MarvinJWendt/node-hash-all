import test from 'ava'

const app = require('../src/app')

test('Hashing all accepted hashes', t => {
  console.log(app.forEachHash('Hello World', (hash, algo) => {
    console.log(`(${algo}) - ${hash}`)
    t.pass()
  }))
})
