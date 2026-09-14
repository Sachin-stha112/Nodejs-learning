//Buffer.from()

//creating a buffer by preloading string
const buf1 = Buffer.from('Hello')
console.log(buf1)
console.log(buf1.toString())
//creating a buffer by preloading array of bytes
const buf2 = Buffer.from([72, 101, 108, 108, 111])
console.log(buf2)
console.log(buf2.toString())

//Buffer.alloc()  : basically just making empty buffer

const buf3 = Buffer.alloc(5)  //initializes a buffer of size 5 and with 00 on each placeholder
console.log(buf3)
//Buffer.allocUnsafe() : instead of initialization with 00, random stuff gets into buffer
const buf4 = Buffer.allocUnsafe(5)
console.log(buf4)

// If you are going to use it:
buf4.fill(0)

console.log(buf4)