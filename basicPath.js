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
