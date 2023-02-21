import React, { useEffect } from 'react'
import {v4 as uiidv4} from "uuid"


const Form = ({input, setInput, todos, setTodos, edit, setEdit}) => {

    const updateTodo = (title, id) => {
        const newTodo = todos.map((todo) => todo.id === id ? {title, id} : todo)
        setTodos(newTodo)
        setEdit("")
    }

    useEffect(() => {
        if(edit){
            setInput(edit.title)
        } else{
            setInput("")
        }
    }, [setInput, edit])

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!edit){
            setTodos([...todos, {id: uiidv4(), title: input}])
            setInput("")
        } else{
            updateTodo(input, edit.id)
        }


    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="submit">
            {edit ? "OK" : "Add"}
        </button>
    </form>
  )
}

export default Form
