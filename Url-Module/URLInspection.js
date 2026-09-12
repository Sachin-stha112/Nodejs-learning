import http from 'http'

const server = http.createServer((req,res) => {
const url = new URL(req.url, `http://${req.headers.host}`)
console.log(url)
res.end('Hello')

})
server.listen(3000)