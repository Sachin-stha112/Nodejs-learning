
const url = new URL('https://example.com')

url.protocol = 'https:'
url.hostname = 'api.example.com'
url.port = '8000'

url.pathname = '/api/products'

url.searchParams.set('category', 'shoes')
url.searchParams.set('sort', 'price')

url.hash = 'results'

console.log(url.href)
