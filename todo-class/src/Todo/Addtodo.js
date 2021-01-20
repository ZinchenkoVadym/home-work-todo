import React, {Component} from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    addTodo(todo) {
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({value: ""});
        }
        this.props.addTodo(todo)
    }

    render() {
        return (
            <div className="add">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button type={"submit"} onClick={() => this.addTodo(this.state.value)}> Add todo</button>
            </div>
        )
    }
}

export default AddTodo