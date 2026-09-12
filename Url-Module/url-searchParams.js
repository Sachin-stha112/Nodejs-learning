const url = new URL(
    'https://example.com/products?category=shoes&brand=nike&price=100'
)
const params = url.searchParams

//reading 
console.log("Category: ", params.get('category'))
console.log("Brand: ", params.get('brand'))
console.log("Price: ", params.get('price'))

//checking
console.log("Has Brand? ", params.has('brand'))
console.log("Has Price? ", params.has('price'))

//modifying

params.set('price', '150')
params.append('color', 'white')
params.delete('brand')

console.log("Final URL: ", url.href)