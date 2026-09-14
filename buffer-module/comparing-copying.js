const a = Buffer.from('Apple')
const b = Buffer.from('Banana')
// Buffer.compare() : 
console.log(Buffer.compare(a,b)) //  o/p: -1 coz apple comes before banana in alphabetical order
console.log(Buffer.compare(b,a)) // 1
console.log(Buffer.compare(a, a)) // 0, coz they same

// buff1.equal(buff2)
console.log(a.equals(b))
console.log(a.equals(a))

// equals() vs ===
const first = Buffer.from('Hello')
const second = Buffer.from('Hello')

console.log(first === second)
// false

// === checks whether they are the same object
// equals() checks whether their contents are the same

// copy()
const source = Buffer.from('Hello')
const target = Buffer.alloc(5)
source.copy(target)
console.log(target.toString())
// to prove: source and target doesn't share same memory location
source[0] = 74
console.log(target.toString())

// copy a part of buffer
const source2 = Buffer.from('Hello World')
const target2 = Buffer.alloc(5)
source2.copy(target2, 0, 0, 5)
console.log("Output of copy a part of buffer: ")
console.log(target2.toString())