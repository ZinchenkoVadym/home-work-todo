import React, {useContext} from 'react';
import Context from "../context";

let styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    const { removeTodo } = useContext(Context)
    let classes =[];

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input type='checkbox'
                   style={styles.input}
                   onChange={() => onChange(todo.id)}
            />
            < strong> {index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
            <button className={'rm'} onClick={() => removeTodo(todo.id)}> &times; </button>
        </li>
    )
}


export default TodoItem