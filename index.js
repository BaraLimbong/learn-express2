const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    message: 'hello world'
  })
})
let nextId = 5
let todos = [
  {
    id: 1,
    todo: 'read a book'
  },
  {
    id: 2,
    todo: 'learn express.js'
  },
  {
    id: 3,
    todo: 'chillin with firends'
  },
  {
    id: 4,
    todo: 'not play play'
  }
]
app.get('/todos', (req, res) => {
  res.send({
    message: 'To do List',
    data: todos
  })
})

app.delete('/todos', (req, res) => {
  todos = []
  console.log(todos)

  res.send({
    message: 'Remove to do list',
    data: todos
  })
})

app.post('/todos', (req, res) => {
  if (req.body.todo) {
    const newTodo = {
      id: nextId,
      todo: req.body.todo
    }
    todos = todos.concat(newTodo)
    nextId++
    res.send({
      message: 'create new todo',
      newTodo: newTodo,
      todos: todos
    })
  } else {
    res.send({
      message: 'failed make to do list',
      error: 'unnamed'
    })
  }
})

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id)
  todos = todos.filter(doing => doing.id !== id)
  res.send({
    message: 'one todo has been deleted',
    id: id
  })
})
app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id)
  const newTodo = req.body.todo
  const newTodos = todos.map(doing => {
    if (doing.id === id) {
      doing.todo = newTodo
      return doing
    } else {
      return doing
    }
  })
  res.send({
    message: 'one todo has been updated',
    id: id,
    newTodos: newTodos
  })
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
