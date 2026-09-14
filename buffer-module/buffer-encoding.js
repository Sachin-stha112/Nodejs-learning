const text = 'Hello'

const buf = Buffer.from(text)

// ========================================
// UTF-8
// ========================================

console.log(buf.toString('utf8'))
// Hello

console.log(buf.toString())
// Hello

// ========================================
// HEX
// ========================================

console.log(buf.toString('hex'))
// 48656c6c6f

// ========================================
// BASE64
// ========================================

console.log(buf.toString('base64'))
// SGVsbG8=

// ========================================
// ASCII
// ========================================

console.log(buf.toString('ascii'))
// Hello
