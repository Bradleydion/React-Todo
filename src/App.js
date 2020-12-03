import React from 'react';
import ToDoList from "./components/TodoList"
import ToDoForm from "./components/TodoForm"
import "./components/Todo.css"
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
}
  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      completed: false,
      id: Date.now()
    }
    this.setState({
      ...this.state,
      incompleteTask:[...this.state.incompleteTask, newTask]
    })
  }
  
  toggleTask = (taskId) => {
  this.setState({
      ...this.state,
      incompleteTask: this.state.incompleteTask.map((task)=>{
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
      incompleteTask: this.state.incompleteTask.filter((task)=> !task.completed)
    })
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask}/>
        <ToDoList
        incompleteTask={this.state.incompleteTask}
        toggleTask={this.toggleTask}
        clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;
