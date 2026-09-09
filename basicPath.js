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

// 