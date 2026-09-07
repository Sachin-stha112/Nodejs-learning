import fs from 'node:fs/promises'

async function readAll(fileHandle) {
    const size = (await fileHandle.stat()).size
    const buffer = Buffer.alloc(size)
    await fileHandle.read(buffer, 0, size, 0)
    return buffer.toString('utf8')
}

const fileHandle = await fs.open('demo.txt', 'w+')
console.log('File opened successfully')

try {
    /* Write data to the file */
    await fileHandle.writeFile('Hello from Node.js\nThis is Sachin Shrestha')

    /* Read data back from the file */
    const content = await readAll(fileHandle)
    console.log('File Content: ')
    console.log(content)
} catch (error) {
    console.error('Something went wrong: ', error)
} finally {
    await fileHandle.close()
}