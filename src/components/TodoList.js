// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Task from "./Todo"

const ToDoList =(props) => {
    return (
        <div className= "todo-list">
            {props.incompleteTask.map((task)=>(
                <Task key={task.id} task={task} toggleTask={props.toggleTask}/>
            ))}
            < button className ="clear-bttn" onClick={props.clearTask}>
                Completed
            </button>
        </div>
    )
}
export default ToDoList