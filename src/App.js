import React from 'react';
import ReactDOM from "react-dom"
import ToDoList from "./components/TodoList"
import ToDoForm from "./components/TodoForm"

const incompleteTask = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state={
    incompleteTask
  }
  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      completed: false,
      id: Date.now()
    }
    this.setState({
      ...this.state,
      task: [this.state.task, newTask]
    })
  }
  
  toggleTask = (taskID) => {
  this.setState({
      ...this.state,
      task: this.state.task.map((task)=>{
      if (taskId === task.id){
        return {
          ...task,
          completed: !task.completed
        }}
        else {
          return task;
        }
    })
  })
  }
  clearTask = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      task: this.state.task.filter((task)=> !task.completed)
    })
  }
}


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask}/>
        <ToDoList
        task={this.state.task}
        toggleTask={this.toggleTask}
        clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;
