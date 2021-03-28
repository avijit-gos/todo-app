import React, { Component } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";

class TodoList extends Component {
    render() {
        //...
        const {items, handleDelete, handleEdit} = this.props;
        //...
        return (
            <div className="todo-list">
                <p className="todo-list-header">my plan for today</p>

                <div className="todo-list-content">
                   {
                       items.map(item => {
                           return (
                               <div key={item.id} className="text">
                                  <span className="todo-text">{item.title}</span>
                                  <div className="todo-icons">
                                  <span className="btns edit" onClick={()=> handleEdit(item.id)}><FaEdit  /></span>
                                  
                                  <span className="btns delete" onClick={()=> handleDelete(item.id)}><FaTrash /></span>

                                  </div>
                               </div>
                           )
                       })
                   }
               </div>
            </div>
        )
    }
}

export default TodoList
