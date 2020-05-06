import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddTodo extends Component{

    state = {
        title: ''
    }
    onChangeMethod = (e) => this.setState({
        // title: e.target.value
        [e.target.name]: e.target.value
    });

    onSubmitMethod = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    render(){
        // console.log(this.props.todos)
        return (
            <form onSubmit = {this.onSubmitMethod} style ={{display: 'flex'}}>
                <input 
                type="text"
                name="title"
                style ={{flex: '10', padding: '5px'}}
                placeholder="Add Todo..."
                value ={this.state.title}
                onChange ={this.onChangeMethod}
                />
                <input
                type="submit"
                value="submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo;
