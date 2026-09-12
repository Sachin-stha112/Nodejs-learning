const url = new URL(
    'https://example.com:8000/products/shoes?brand=nike&price=100#reviews'
)
console.log('href: ', url.href)
console.log('protocol: ', url.protocol)
console.log('hostname :', url.hostname)
console.log('host: ', url.host)
console.log('port: ', url.port)
console.log('search: ', url.search)
console.log('hash: ', url.hash)
console.log('searchParams: ', url.searchParams)