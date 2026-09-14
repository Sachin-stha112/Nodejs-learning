const buf = Buffer.alloc(20)
// .write()
buf.write('Hello World')
console.log(buf)
console.log(buf.toString())

//reading part of buffer using start and end
console.log(buf.toString('utf8', 0, 5)) // utf8 or any other is must

//reading individual bytes
console.log(buf[0])
console.log(buf[1])

// changing indie bytes
buf[0] = 74
console.log(buf.toString('utf8',0,5))

    