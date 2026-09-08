import fs from 'node:fs'
let totalBytes = 0

const stream = fs.createReadStream('demo.txt', {
    encoding: 'utf8',
    highWaterMark: 10,
})
// highWaterMark (Controlling Threshold of Chunks)
stream.on('data', (chunk) => {
    console.log('Data Received: ')
    console.log('Chunk Size: ', chunk.length, ' bytes')

    console.log(chunk)
    totalBytes += chunk.length
})
stream.on('end', () => {
    console.log('Finished Reading')
    console.log('Total Bytes: ', totalBytes)
})
stream.on('error', (error) => {
    console.error('Something went wrong: ', error)
})
