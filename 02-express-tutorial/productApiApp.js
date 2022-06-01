
const express = require('express');
const app = express();
const {products} = require('./data.js');


app.get('/', (req, res) => {
    // res.status(200).json(products);
    res.send(`<h1> Home Page </h1><a href="/api/products">Products</a>`)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts)
})

app.get('/api/products/:productid', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const {productid} = req.params;
    const singleProduct = products.find(product => product.id == Number(productid))
    
    // Error handling
    if (!singleProduct){ 
        res.status(404).send("No product found")
    }
    else{
        const {id, name, image} = singleProduct
        res.json({id, name, image})
    }
    
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    // Check if user has provided 'search' query parameter
    if (search){
        sortedProducts = sortedProducts.filter( (product) => {
            return product.name.startsWith(search)
        })
    }

    // Check if user has provided 'limit' query parameter
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        return res.status(200).json({success: true, data: sortedProducts})
    }
    return res.status(200).json(sortedProducts)
    // res.send('Test')
})

// All requests that hit 404 (error handling, in a way)
app.all('*', (req, res) => {
    res.status(404).send(`Cannot get ${req.url}`)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})


// const http = require('http');
// const fs = require('fs');

// // get all files

// // This file only needs to be loaded ONCE by the server. It does NOT need to be loaded on each request.
// // Hence, we can use readFileSync instead of the async version.
// const homePage = fs.readFileSync('./navbar-app/index.html');
// const homeStyles = fs.readFileSync('./navbar-app/styles.css');
// const homeImage = fs.readFileSync('./navbar-app/logo.svg');
// const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

// const server = http.createServer((req, res) => {
//     console.log(req.method, req.url);

//     const url = req.url;
//     console.log(url)

//     if (url == '/'){
//         res.writeHead(200, {'content-type' : 'text/html'})
//         res.write(homePage)
//         res.end()
//     }

//     else if(url == '/styles.css'){
//         res.writeHead(200, {'content-type' : 'text/css'})
//         res.write(homeStyles)
//         res.end()
//     }

//     else if(url == '/logo.svg'){
//         res.writeHead(200, {'content-type' : 'image/svg+xml'})
//         res.write(homeImage)
//         res.end()
//     }

//     else if(url == '/browser-app.js'){
//         res.writeHead(200, {'content-type' : 'text/javascript'})
//         res.write(homeLogic)
//         res.end()
//     }

//     else if(url == '/about'){
//         res.writeHead(200, {'content-type' : 'text/html'})
//         res.write(`<h1> About page </h1>`)
//         res.end()
//     }

//     else {
//         res.writeHead(404, {'content-type' : 'text/html'})
//         res.write(`<h1> Page not found </h1>`)
//         res.end()
//     }
// })

// server.listen(5000)
