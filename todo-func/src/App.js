import React from 'react'
import TodoList from './Todo/Todolist'
import Context from "./context";
import AddTodo from "./Todo/Addtodo";



function App() {

    let [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'buy tv'},
        {id: 2, completed: false, title: 'buy mobile'},
        {id: 3, completed: false, title: 'buy oven'}
    ])

    function toggleTodo (id) {
       setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))

    }

    function removeTodo (id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo (title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
        <div className='wrapper'>
            <h1>Todo list</h1>
            <AddTodo onCreate={addTodo} />
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
        </Context.Provider>
    )
}

export default App;
