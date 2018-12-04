const fs = require('fs')
const {promisify} = require('util')
const readFileAsync = promisify(fs.readFile)
const fileName = './day2-input.txt'
// const fileName = './day2-sample.txt'
readFileAsync(fileName)
.then(data => {
    const lines = data.toString().split('\n').filter(item => !!item)
    let group2 = 0
    let group3 = 0
    lines.forEach(item => {
        const map = item.split('').reduce((carry, item) => {
            let count = 0
            if (carry.has(item)) {
                count = carry.get(item)
            }
            count += 1
            carry.set(item, count)
            return carry
        }, new Map())
        let found2 = 0
        let found3 = 0
        for ([k, v] of map) {
            if (v === 2) {
                found2 = 1
            }
            if (v === 3) {
                found3 = 1
            }
        }
        console.log(item, ' d2 ', (found2 === 1), ' d3 ', (found3 ===1))
        group2 += found2
        group3 += found3
    });
    console.log('2 is ', group2, ', 3 is ', group3)
    console.log('result ', group2 * group3)
})
.catch(e => console.error(e))