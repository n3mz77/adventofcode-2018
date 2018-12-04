const {readInputFile} = require('./utils')
const fileName = 'day3-sample.txt'
readInputFile(fileName)
    .then(data => {
        const row = 8;
        const column = 8;
        const matrix = data.reduce((carry, item) => {
            console.log(item)
            const [, id, l, t, w, h] = item.split(/^#([0-9]+) @ ([0-9]+),([0-9]+): ([0-9]+)x([0-9]+)$/)
            const left = parseInt(l)
            const top = parseInt(t)
            const width = parseInt(w)
            const height = parseInt(h)
            for (let i = top, maxHeight = top + height; i < maxHeight; ++i) {
                for (let j = left, maxWidth = left + width; j < maxWidth; ++j) {
                    const index = row * i + j
                    if (!carry.has(index)) {
                        carry.set(index, new Set())
                    }
                    const idList = carry.get(index)
                    idList.add(id)
                    carry.set(index, idList)
                }    
            }
            return carry
        }, new Map())

        const set = new Set();
        for ([k, v] of matrix) {
            console.log('#', k, ' contain ', v.size)
        }
        const map = new Map()
    })
    .catch(e => console.error(e))