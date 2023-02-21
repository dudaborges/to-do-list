import React from 'react'
import {v4 as uiidv4} from "uuid"


const Form = ({input, setInput, todos, setTodos}) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        setTodos([...todos, {id: uiidv4(), title: input, completed: false}])
        setInput("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
