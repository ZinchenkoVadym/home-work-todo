import React, {Component} from 'react'
import AddTodo from "./Todo/Addtodo";
import TodoItem from "./Todo/Todoitem";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 0, completed: false, title: 'buy tv'},
                {id: 1, completed: false, title: 'buy mobile'},
                {id: 2, completed: false, title: 'buy oven'}
            ],
            nextId: 3
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, title: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    }


    render() {
        return (
            <div className='wrapper'>
                <h1>Todo list</h1>
                <AddTodo todoText="" addTodo={this.addTodo}/>
                <ul className="list">
                    {
                        this.state.todos.map((todo, index) => {
                            return <TodoItem
                                todo={todo}
                                key={todo.id}
                                id={todo.id}
                                index={index}
                                removeTodo={this.removeTodo}
                            />
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default App