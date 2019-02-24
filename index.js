require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const root = require('./middlewares/index')
const todos = require('./middlewares/Todos/')

app.get('/', root.hello)
app.get('/todos', todos.getTodos)
app.post('/todos', todos.createNewTodos)
app.delete('/todos', todos.deleteAllTodos)
app.delete('/todos/:id', todos.deleteOneTodosById)
app.put('/todos/:id', todos.updateOneTodosById)

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
