import fs from 'node:fs/promises'
console.log("Start")
const data = await fs.readFile("demo.txt", "utf8")
console.log(data)
console.log("END")