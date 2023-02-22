import React from 'react'

const TodoList = ({todos, setTodos, setEdit}) => {

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEdit(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }



  return (
    <div>
        {todos.map((todo) => {
            return(
                <li key={todo.id}>
                    <input type="text" value={todo.test} onChange={(e) => e.preventDefault()} />
                    <input type="text" value={todo.title} onChange={(e) => e.preventDefault()} />
                    <button onClick={() => handleEdit(todo)}>Editar</button>
                    <button onClick={() => handleDelete(todo)}>Deletar</button>
                </li>
                
            )
        })}

    </div>
  )
}

export default TodoList