
const express = require('express');
const path = require('path');
const app = express();

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

//setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// Alternative: 1. Add index.html to public
// 2: Server-side rendering (SSR) 
// })

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
})

// All requests that hit 404 (error handling, in a way)
app.all('*', (req, res) => {
    res.status(404).send("Error Page")
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
