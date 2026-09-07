import fs from 'node:fs/promises'

async function readFileDemo()
{   
    /* Reading file must be inside try and catch block, coz sometimes we might get error while reading the file */
    try
    {
        const data = await fs.readFile('demo.txt', 'utf8')
        console.log(data);
    }
    catch(err)
    {
        console.error("Error reading the file: ", err);
    }
}
readFileDemo();