import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import {v4 as uuid} from 'uuid';
// import logo from './logo.svg';
import uuid from 'react-uuid';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id:uuid(),
        title: 'todo_1',
        completed: false
      },
      {
        id:uuid(),
        title: 'todo_2',
        completed: false
      },
      {
        id:uuid(),
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

  delTodo = (id) =>{
    // console.log(id)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }  
  addTodo = (title)=>{
    // console.log(title)
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo = {this.addTodo} />
          <Todos todos={this.state.todos} 
          markCompleteHere = {this.markCompleteFinal}
          delTodo = {this.delTodo}
          />
        </div>
      </div>
    );
  }
}


export default App;
