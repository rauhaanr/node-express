const express = require('express')
const {logger} = require('./logger.js')

const app = express()

// req => middleware => res
// app.use(logger) // Logger is invoked on every app function
app.use('/api', logger) // Logger is invoked only on api urls

// Add logger middleware in arguments
app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})