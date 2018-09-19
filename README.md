# hash-all
> NodeJS module to hash a string in every available hash and do something with it.

## Usage
To install the module run:
``npm i hash-all``

To import the module:

    const hashAll = require('hash-all')
    
To run it:

    hashAll.forEachHash("SOME STRING", (hash, algo) => {
        console.log(`(${algo}) - ${hash}`)
    })