import React from 'react'
import TodoItem from "./Todoitem";
import PropTypes from 'prop-types'


function TodoList(props) {
    let styles = {
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        },
    }
    return (
        <ul style={styles.ul}>
            {props.todos.map(function (todo, index) {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={props.onToggle}
                    />
            })}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList;