const fs = require('fs')
const {promisify} = require('util')
const fsAsync = promisify(fs.readFile)
fsAsync('./adventofcode-day1-input.txt')
    .then(data => {
        const lines = data.toString().split("\n").filter(item => !!item)
        const result = lines.reduce((carry, item) => {
            console.log(item)
            return carry + parseInt(item)
        }, 0)
        console.log('result is ', result)
        return null
    })
    .catch(e => {
        console.error(e)
        return null
    })
    .then(() => console.log('end'))
