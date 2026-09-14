// subarray() : let you take a portion of a Buffer. 
const original = Buffer.from('Hello World')
const part = original.subarray(0,5)
console.log(part.toString())

// subarray shares the same memory
part[0] = 74 // J
console.log(part.toString())
console.log(original.toString())

// .slice() : same as subarray(), older js file used slice that's it
// slice() : also shares the same memory
const original2 = Buffer.from('Hello World')
const part2 = original2.subarray(0,5)
console.log(part2.toString())

// create an independent copy of part of a Buffer: Two methods
// 1) from() & 2) copy()

// from() : easy independent copy
const original3= Buffer.from('Nodejs learning')
const part3 = Buffer.from(original3.subarray(0,6))
console.log(part3.toString())
original3[0] = 74
console.log(part3.toString())

// copy() : copy bytes into an existing Buffer
//already done in comparing-copying.js