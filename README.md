# hash-all
> NodeJS module to hash a string in every available hash and do something with it.

## Usage
To install the module run:
``npm i hash-all``

To import the module:

    const hashAll = require('hash-all')
    
To run it:
    
    //Log every hash possibility to the console
    hashAll.forEachHash("SOME STRING", (hash, algo) => {
        console.log(`(${algo}) - ${hash}`)
    })
    
    //Get every supported hash ('md5, 'sha1', etc..)
    hashAll.getHashes()