import React from "react";
import './TodoItems.css'

export const TodoItems = (props) => {
    const { items, deleteItem } = props;
    let length = items.length;
    let itemsList = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="department">{item.department}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
        ) : (
            <p>There is no items to show</p>
        )
    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="department title">Department</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {itemsList}
        </div>
    )
}
