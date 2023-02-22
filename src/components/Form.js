import React, { useEffect } from 'react'
import {v4 as uiidv4} from "uuid"


const Form = ({input, setInput, todos, setTodos, edit, setEdit, inputTest, setInputTest}) => {

    const updateTodo = (title, test, id) => {
        const newTodo = todos.map((todo) => todo.id === id ? {title, test, id} : todo)
        setTodos(newTodo)
        setEdit("")
    }

    useEffect(() => {
        if(edit){
            setInput(edit.title)
            setInputTest(edit.test)
        } else{
            setInput("")
            setInputTest("")
        }
    }, [setInput, setInputTest, edit])

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!edit){
            setTodos([...todos, {id: uiidv4(), title: input, test: inputTest}])
            setInput("")
            setInputTest("")
        } else{
            updateTodo(input, inputTest, edit.id)
        }


    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputTest} onChange={(event) => setInputTest(event.target.value)} />
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="submit">
            {edit ? "OK" : "Add"}
        </button>
    </form>
  )
}

export default Form
