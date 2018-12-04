const fs = require('fs')
const {promisify} = require('util')
const fsPromise = promisify(fs.readFile)
const readInputFile = (fileName) => {
    return fsPromise(fileName)
        .then(raw => {
            const data = raw.toString()
            return data.split('\n')
                .filter(item => !!item)
        })
}
module.exports = {
    readInputFile
}