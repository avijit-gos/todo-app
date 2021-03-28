import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    //Creating Ref
    componentDidMount() {
        this.inputRef.current.focus();
    }


    render() {
        //...
        const {item, itemChange, submitChange} = this.props;
        //..
        
        return (
            <div className="todo-input">
                <form onSubmit={submitChange}>
                    <input type="name" value={item} onChange={itemChange} placeholder="add your plan" ref={this.inputRef} className="todo-input-field" />
                    <div className="todo-button">
                        <button type="submit" className="btn">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoInput
