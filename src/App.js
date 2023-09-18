import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem/AddItem';
import {TodoItems} from './TodoItems/TodoItems';

class App extends Component {
 state = {
    items : [
      {id:1,name:'alaa',department:'products',age:25},
      {id:2,name:'aya',department:'products',age:24},
      {id:3,name:'toka',department:'delivery',age:23}
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    this.setState({items:this.state.items.concat(item)})
  }

  render() {
    console.log("state in render:", this.state.items)
    return (
      <div className='App container'>
        <h1 className='text-center'> Employees List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem = {this.addItem}/>
      </div>
    );
  }
}

export default App;
