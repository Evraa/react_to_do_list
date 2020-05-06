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


  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}


export default App;
