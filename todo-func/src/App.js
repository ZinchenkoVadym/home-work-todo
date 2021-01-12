import React from 'react'
import TodoList from "./Todo/Todolist"

function App() {
    let todos = [
        {id: 1, completed: true, title: 'buy tv'},
        {id: 2, completed: true, title: 'buy mobile'},
        {id: 3, completed: true, title: 'buy oven'}
    ];

    return (
    <div className="wrapper">
      <h1>Todo list</h1>
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
