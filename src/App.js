import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
