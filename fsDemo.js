import fs from 'node:fs/promises'

async function writeFileDemo()
{
    try
    {
        await fs.writeFile('demo2.txt', 'Hello World', 'UTF8')
        console.log("File created successfully!")
    }
    catch (err)
    {
        console.error("Error while Creating file: ", err)
    }
}

async function readFileDemo()
{   
    /* Reading file must be inside try and catch block, coz sometimes we might get error while reading the file */
    try
    {
        const data = await fs.readFile('demo2.txt', 'utf8')
        console.log(data);
    }
    catch(err)
    {
        console.error("Error reading the file: ", err);
    }
}
writeFileDemo();
readFileDemo();