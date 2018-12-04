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
    const matrix = lines.map(item => {
        return item.split('')
    });
    const maxChar = matrix[0].length
    const map = new Map()
    for (let i = 0, size = matrix.length; i < size; ++i) {
        const currentItem = matrix[i]
        console.log(currentItem.join(''))
        for (let j = i + 1; j < size; ++j) {
            const compare = matrix[j]
            let diff = maxChar
            for(let run = 0; run < maxChar; ++run) {
                if (compare[run] === currentItem[run]) {
                    diff -= 1
                }
            }
            const key = currentItem.join('') + '-' + compare.join('')
            map.set(key, diff)
            console.log(currentItem.join(''), ' - ', compare.join(''), ' = ', diff)
        }
    }

    let found = null
    let min = maxChar
    for ([k, v] of map) {
        if (v < min) {
            found = k
            min = v
        }
    }
    console.log('found ', found, ' min ', min)
    const [a, b] = found.split('-')
    const listA = a.split('')
    const listB = b.split('')
    const result = []
    for (let i = 0; i < maxChar; ++i) {
        if (listA[i] === listB[i]) {
            result.push(listA[i])
        }
    }
    console.log('result ', result.join(''))
})
.catch(e => console.error(e))