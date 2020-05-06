import React, { Component } from 'react';

class Todoitem extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.todo.title}</h2>
            </div>
        );
    }
}

export default Todoitem;
