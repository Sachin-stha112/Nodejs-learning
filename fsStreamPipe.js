import fs from 'node:fs'

const source = fs.createReadStream('demo2.txt') // just for copy and paste we don;t need to write -> encoding: 'utf8'
const destination = fs.createWriteStream('myfile.txt')

source.pipe(destination)

source.on('error', (error) => 
{
    console.error("Error on Source-Side: ", error)
})

destination.on('error', (error) => {
    console.error('Error on Source-Side: ', error)
})

destination.on('finish', () => {
    console.log("Finished Copying FIle")
})