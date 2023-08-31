import React, { Component } from "react";
import './AddItem.css'

class AddItem extends Component {
    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === '') {
            return false;
        } else {
            this.props.addItem(this.state);
            this.setState({
                name: '',
                department:'',
                age: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name}></input>
                    <input type="text" placeholder="Enter department name..." id="department" onChange={this.handleChange} value={this.state.department}></input>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange} value={this.state.age}></input>
                    <input type="submit" value="Add"></input>
                </form>
            </div>
        )
    }
}

export default AddItem;