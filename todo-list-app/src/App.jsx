import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="todo-container">
        <div className="add-todo">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTodo}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="todo-summary">
          <p>Total tasks: {todos.length}</p>
          <p>Completed tasks: {todos.filter((todo) => todo.completed).length}</p>
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div >
  );
}

export default App;
