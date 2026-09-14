const first = Buffer.from('Hello ')
const second = Buffer.from('Node ')
const third = Buffer.from('js')
// concat()
const combine = Buffer.concat([first, second, third])
console.log(combine.toString())

// indexOf() : Find FIRST occurrence
const repeated = Buffer.from('hello hello')
console.log(repeated.indexOf('hello'))

//lastIndexOf() : Find LAST occurrence
console.log(repeated.lastIndexOf('hello'))

//includes() : is it included ?
console.log(`Node is included: ${combine.includes('Node')}`)
console.log(`Python is included: ${combine.includes('Python')}`)