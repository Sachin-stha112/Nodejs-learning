import fs from 'node:fs'
let totalBytes = 0;

const stream = fs.createReadStream ('demo.txt', {
    encoding : 'utf8'
})
// doing things in some events like data, error, end
stream.on('data', (chunk) => {
    console.log("Data Received: ")
    console.log('Chunk Size: ', chunk.length, ' bytes')
    console.log('Chunk Length Meter: ', '='.repeat(Math.ceil(chunk.length / 10)))
    console.log(chunk)
    totalBytes += chunk.length
})
stream.on('end', () => {
    console.log("Finished Reading")
    console.log("Total Bytes: ", totalBytes)
})
stream.on('error', (error) => {
    console.error("Something went wrong: ", error)
})