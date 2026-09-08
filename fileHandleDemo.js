import fs from 'node:fs/promises'
async function handleFile()
{
    let fileHandle;
    try {
        // opening a file
        fileHandle = await fs.open('demo.txt', 'w+')
        console.log('File opened successfully')
        // writing into a file
        await fileHandle.writeFile('Hello there!\nbackend is boring af')
        console.log('File written successfully')
        // Reading file

        // object destructing
        const { bytesRead, buffer } = await fileHandle.read({
            buffer: Buffer.alloc(1024),
            position: 0,
        })
        // converting content of buffer into string and storing in content variable
        const content = buffer.subarray(0, bytesRead).toString('utf8')

        console.log('File content: ')
        console.log(content)
    } catch (error) {
        console.error('Something went wrong:', error)
    } finally {
        await fileHandle.close()
        console.log('File Closed')
    }
}
handleFile()