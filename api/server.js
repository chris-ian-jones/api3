const express = require('express')

const productsRouter = require('../products/productsRouter')

const server = express()

// global middleware

server.use(express.json())

server.use('/products', productsRouter)
// server.use('/suppliers', suppliersRouter)

// routes

server.get('/', (req, res) => {
  res.status(200).json({api: 'up'})
})

module.exports = server