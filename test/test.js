import test from 'ava'
const app = require("../src/app")

test('Test1', t => {
  console.log(app.forEachHash("Hello World", (hash, algo) => {
    console.log(`(${algo}) - ${hash}`)
    t.pass()
  }))
})
