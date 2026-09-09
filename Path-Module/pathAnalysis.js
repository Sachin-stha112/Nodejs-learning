import path from 'node:path'
const filePath = '/Nodejs-learn/public/src/demo.txt'

// basename() : Get filename
console.log("Basename: ", path.basename(filePath))
// basename("filePath", ".ext") : Get filename without extension
console.log("Basename without extension: ", path.basename(filePath, ".txt"))

// dirname() : Give you everything other than basename
console.log("Directory name: ", path.dirname(filePath))
