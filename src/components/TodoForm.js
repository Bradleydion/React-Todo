import React from "react";

class ToDoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            newTask:""
        };
    }
    handleChanges = (e) => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
    }
    submitTask = (e) => {
        e.preventDefault();
        this.props.addTask(e, this.state.newTask);
        this.setState({newTask:""})
    }
    render(){
        return (
            <form onSubmit={this.submitTask}>
                <input
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                />
                <button>Add Task</button>
            </form>
        )
    }
}
export default ToDoForm