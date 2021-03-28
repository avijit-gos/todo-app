import React, { Component } from 'react'
import TodoInput from './Todo-Input'
import TodoList from './Todo-List'
import { v4 as uuidv4 } from 'uuid';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            items: [],
            id: uuidv4(),
            editItem: false,

        }
        this.itemChange = this.itemChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    //item change handler
    itemChange(event) {
        this.setState({ item: event.target.value })
    }

    //Submit Form handler
    submitChange(event) {
        event.preventDefault();

        const newItem = {
            title: this.state.item,
            id: uuidv4(),
        }
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            items: updatedItems,
            item: ''
        });
    }

    handleDelete(id) {
        const filterItems = this.state.items.filter((item) => item.id !== id );
        this.setState({ items: filterItems })
    }

    //Edit the Todo item
    handleEdit(id) {
        //delete the selected item
        const filterItems = this.state.items.filter((item) => item.id !== id );
        //select for editing
        const selectItem = this.state.items.find((item) => item.id === id );
        this.setState({ 
            item: selectItem.title,
             items: filterItems,
              id: id,
              editItem: true,
        })

    }



    render() {
        return (
            <div className="container">
               <p className="header-text">make your plan for today</p>
               <TodoInput item={this.state.item} itemChange={this.itemChange} submitChange={this.submitChange} />
               <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
            </div>
        )
    }
}

export default Container
