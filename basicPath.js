import path from 'node:path'

//path.join()
const joinedPath = path.join(
    "Nodejs-learn",
    "public",
    "home.html"
)
console.log(joinedPath)

// path.join with handling
const joinedWithNavigation = path.join(
    "Nodejs-learn",
    "public",
    "..",
    "src",
    "demo.txt"
)
console.log(joinedWithNavigation)

// path.resolve()
const absolutePath = path.resolve(
    "Nodejs-learn",
    "public",
    "home.html"
)
console.log(absolutePath)

/*Resolve() process from right to left*/
const absolutePath2 = path.resolve(
    "/first",
    "/second",
    "third"
)
console.log(absolutePath2) // stops at second because of '/'


// path.normalize()
const messyPath = '/users/./john/documents/../photos//profile.jpg'

const cleanPath = path.normalize(messyPath)
console.log("Before, Messy Path:  ", messyPath)
console.log("After, Normalized Path: ", cleanPath)

// path.relative : returns relative path from the first path to the second path

const from = '/Nodejs-learn/public/src'
const to = '/Nodejs-learn'
const relativePath = path.relative(from, to)
console.log("Relative Path is  " ,relativePath)

// isAbsolute() : returns true for non-exsistence path as well 
// These do NOT exist on your computer, but path.isAbsolute() doesn't care:
console.log(path.isAbsolute('/this/path/is/fake.txt')); 
// Output: true (because it starts with '/')

console.log(path.isAbsolute('documents/photos/vacation.jpg')); 
// Output: false (because it's relative)
