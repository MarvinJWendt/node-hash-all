import test from 'ava'

const testHash = require('test-hash')

const app = require('../src/app')

test('Get all hashes as function', t => {
  app.getHashes().forEach(hash => {
    console.log(hash)
  })
  t.pass()
})

test('Get all hashes as variable', t => {
  app.hashes.forEach(hash => {
    console.log(hash)
  })
  t.pass()
})

test('Hashing all accepted hashes and testing them (standard)', t => {
  console.log(app.forEachHash('Hello World', (hash, algo) => {
    console.log(`(${algo}) - ${hash}`)
    if (testHash(hash, 'Hello World')) console.log('Working!')
    else {
      console.log('ERROR')
      t.fail(`${algo} failed to return the correct string!`)
    }
    console.log('')
  }))

  t.pass()
})

test('For each hash in list', t => {
  app.forEachHashInList('Hello World', ['md5', 'sha1'], (hash, algo) => {
    console.log(`(${algo}) - ${hash}`)
  })

  t.pass()
})
