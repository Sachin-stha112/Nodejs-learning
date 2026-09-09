import path from 'node:path'

// ========================================
// 1. path.sep
// ========================================

console.log('Path separator:', path.sep)

console.log('Current platform separator:', JSON.stringify(path.sep))

// Example
const parts = ['app', 'src', 'controllers', 'user.js']

const filePath = parts.join(path.sep)

console.log('Built path:', filePath)

// ========================================
// 2. path.delimiter
// ========================================

console.log('Path delimiter:', JSON.stringify(path.delimiter))

// PATH environment variable
console.log('PATH:', process.env.PATH)

// Split PATH into individual directories
if (process.env.PATH) {
    const directories = process.env.PATH.split(path.delimiter)

    console.log('PATH directories:', directories)
}
