import fs from 'node:fs'

const stream = fs.createReadStream ('demo.txt', {
    encoding : 'utf8'
})
// doing things in some events like data, error, end
stream.on('data', (chunk) => {
    console.log("Data Received: ")
    console.log(chunk)
})
stream.on('end', () => {
    console.log("Finished Reading")
})
stream.on('error', (error) => {
    console.error("Something went wrong: ", error)
})