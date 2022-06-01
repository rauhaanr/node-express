const express = require('express')
const {logger} = require('./logger.js')

const app = express()

// req => middleware => res

// function logger(req, res, next) {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     next()
//     // ALWAYS pass onto next middleware by using `next`
//     // OR return middleware function's own response using `send`
// }

// Add logger middleware in arguments
app.get('/', logger, (req, res) => {
    res.send('Homepage');
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})