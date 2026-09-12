import http from 'http'
import { URL } from 'url'

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    console.log('Path:', url.pathname)

    const name = url.searchParams.get('name')
    const age = url.searchParams.get('age')

    console.log('Name:', name)
    console.log('Age:', age)

    res.writeHead(200, {
        'Content-Type': 'application/json',
    })

    res.end(
        JSON.stringify({
            path: url.pathname,
            name,
            age,
        })
    )
})

server.listen(8000, () => {
    console.log('Server running on port 8000')
})
