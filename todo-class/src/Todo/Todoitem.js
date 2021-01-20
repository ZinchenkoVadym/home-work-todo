import React, {Component} from 'react'


class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <li className="item">
                <span>
                <input type='checkbox'
                />
                <strong>{this.props.index + 1}</strong>
                    &nbsp;
                    {this.props.todo.title}
                </span>
                <button className='rm' onClick={(e) => this.removeTodo(this.props.id)}> &times; </button>
            </li>
        )
    }
}

export default TodoItem