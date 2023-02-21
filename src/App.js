import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [edit, setEdit] = useState(null)

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
