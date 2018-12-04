const {readInputFile} = require('./utils')
const fileName = 'adventofcode-day1-input.txt'
// const fileName = 'day1-sample.txt'
readInputFile(fileName)
.then(data => {
    const resultList = []
    let frequency = 0
    let foundNumber = false
    let round = 0
    resultList.push(frequency)
    do {
        for (item of data) {
            frequency += parseInt(item)
            console.log('frequency ', frequency)
            if (resultList.indexOf(frequency) > -1) {
                foundNumber = frequency
                break;
            }
            resultList.push(frequency)
        }
        console.log('#', round)
        round += 1
    } while (foundNumber === false)
    if (foundNumber !== false) {
        console.log('found ', foundNumber)
    } else {
        console.log('not found')
    }
})

.catch(e => console.error(e))