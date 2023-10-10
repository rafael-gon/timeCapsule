const express = require('express')
const routes = express.Router()

// Controllers
const showMemories = require('./controllers/listMemories')
const addMemories = require('./controllers/createMemories')
const changeMemories = require('./controllers/updateMemories')
const removeMemories = require('./controllers/deleteMemories')

// Read
routes.get('/',showMemories.read)

// Create
routes.post('/', addMemories.create)

// Update
routes.post('/:id', changeMemories.update)

// Delete
routes.delete('/:id', removeMemories.delete)


module.exports = routes