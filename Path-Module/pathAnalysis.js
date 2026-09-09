import path from 'node:path'
const filePath = '/Nodejs-learn/public/src/demo.txt'

// basename() : Get filename
console.log('Basename: ', path.basename(filePath))
// basename("filePath", ".ext") : Get filename without extension
console.log('Basename without extension: ', path.basename(filePath, '.txt'))

// dirname() : Give you everything other than basename
console.log('Directory name: ', path.dirname(filePath))

// extname() : Gives extension of the file
console.log('Extension: ', path.extname(filePath))
console.log('extension:', path.extname('archive.tar.gz'))
console.log('extension:', path.extname('README'))
console.log('extension:', path.extname('.env'))

// parse() : Break path into pieces i.e PATH -> OBJECT
const parsedPath = path.parse(filePath)
console.log('parse: ', parsedPath)
console.log('dir: ', parsedPath.dir) // can request for seperate oiece/object

// format() : Build path from pieces   OBJECT → PATH
const formattedPath = path.format({
    dir: '/app/uploads',
    name: 'profile',
    ext: '.png',
})
console.log('Formatted path: ', formattedPath)

// Example: Changing filename and extension
const originalPath = '/app/uploads/profile.jpg'
console.log('Original Path: ', originalPath)
const parts = path.parse(originalPath)
//changing name
parts.name = 'profile-updated'
//changing extension
parts.ext = '.png'
// format() uses `base` over `name`/`ext`, so delete it
delete parts.base
const newPath = path.format(parts)
console.log('New Path: ', newPath)

