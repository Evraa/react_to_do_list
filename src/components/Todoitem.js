import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Todoitem extends Component{
    
    
    //Dynamic Styling
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }

        //Other method!
        return {
            //some styling
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    }
        render(){
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        onChange = {this.props.markComplete.bind(this, id)}
                    /> {' '}
                    {title}
                </p>
            </div>
        );
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default Todoitem;
