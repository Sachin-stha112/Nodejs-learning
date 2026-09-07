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

// async function writeJSONDemo() {
//     try {
//         const data = JSON.stringify({
//             name: 'Sachin',
//             age: 22,
//             email: 'sachin@goat.com',
//         })
//        await fs.writeFile('data.json', data, 'utf8')

//     } catch (err) {
//         console.error("Error while creating file: ", err);
//     }
// }

async function appendDemo()
{
    try
    {
        await fs.appendFile('demo.txt', '\n Why are you ?', 'utf8')
        console.log("Successfully appended file");
    }
    catch(err)
    {
        console.error("Error while appending: ", err);
    }
}

async function readFileDemo()
{
    try 
    {
        const data = await fs.readFile('demo.txt', 'utf8')
        console.log(data)
    }
    catch(err)
    {
        console.error("Error while reading file: ", err)

    }
}

await appendDemo();
readFileDemo();

// async function readJSONDemo() {
//     /* Reading file must be inside try and catch block, coz sometimes we might get error while reading the file */
//     try {
//         const data = await fs.readFile('data.json', 'utf8')
//         const jsonData = JSON.parse(data)
//         console.log(jsonData)
//     } catch (err) {
//         console.error('Error reading the file: ', err)
//     }
// }
// writeFileDemo()
// await writeJSONDemo()
// readJSONDemo()
