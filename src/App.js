import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      edit={edit}
      setEdit={setEdit}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos} 
      setEdit={setEdit} 
      />
    </div>
  );
}

export default App;
