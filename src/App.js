import React, { Component } from 'react';
import Todos from './components/Todos';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id:1,
        title: 'todo_1',
        completed: false
      },
      {
        id:2,
        title: 'todo_2',
        completed: false
      },
      {
        id:3,
        title: 'todo_3',
        completed: false
      }
    ]
  }

  markCompleteFinal = (id) => {
    // console.log(id)
    //this map function is Godess
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }
  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleteHere = {this.markCompleteFinal}/>
      </div>
    );
  }
}


export default App;
