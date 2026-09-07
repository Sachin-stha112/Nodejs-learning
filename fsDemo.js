import fs from 'node:fs/promises'

// async function writeFileDemo()
// {
//     try
//     {
//         await fs.writeFile('demo2.txt', 'Hello World', 'UTF8')
//         console.log("File created successfully!")
//     }
//     catch (err)
//     {
//         console.error("Error while Creating file: ", err)
//     }
// }

async function writeJSONDemo() {
    try {
        const data = JSON.stringify({
            name: 'Sachin',
            age: 22,
            email: 'sachin@goat.com',
        })
       await fs.writeFile('data.json', data, 'utf8')

    } catch (err) {
        console.error("Error while creating file: ", err);
    }
}

async function readFileDemo() {
    /* Reading file must be inside try and catch block, coz sometimes we might get error while reading the file */
    try {
        const data = await fs.readFile('data.json', 'utf8')
        const jsonData = JSON.parse(data)
        console.log(jsonData)
    } catch (err) {
        console.error('Error reading the file: ', err)
    }
}
// writeFileDemo()
await writeJSONDemo()
readFileDemo()
