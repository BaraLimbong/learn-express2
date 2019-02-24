const data = require('./todos')
let nextId = data.nextId
let todos = data.todos
module.exports = {
  getTodos: (req, res) => {
    res.send({
      message: 'To do List',
      data: todos
    })
  },

  deleteAllTodos: (req, res) => {
    todos = []
    console.log(todos)

    res.send({
      message: 'Remove to do list',
      data: todos
    })
  },

  createNewTodos: (req, res) => {
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
  },

  deleteOneTodosById: (req, res) => {
    const id = Number(req.params.id)
    todos = todos.filter(doing => doing.id !== id)
    res.send({
      message: 'one todo has been deleted',
      id: id
    })
  },
  updateOneTodosById: (req, res) => {
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
  }
}
