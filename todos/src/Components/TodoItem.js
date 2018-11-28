import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from "../Actions/actions"

// pascal case helps with distinguishing from html
// no state b/c no way to change components with state,; this is just displaying and showing render method
class TodoItem extends Component {
    render() {
        const { title, completed, handleToggleCompletedTodo, handleDestroyOne } = this.props;
        return (
            // it will be completed
            // <li className={completed && "completed"}> // this will make an error
            // still want something to return even if empty
            <li className={completed ? "completed" : ""}>
                <div className="view">
                    {/* pass handlers down to children to w/e comp has html tag */}
                    <input className="toggle" type="checkbox" defaultChecked={completed} onClick={handleToggleCompletedTodo} />
                    {/* change checked to defaultChecked b/c that's not a react thingy */}
                    <label>{title}</label>
                    <button className="destroy" onClick={handleDestroyOne}></button>
                </div>
            </li>
        );
    };
};

export default TodoItem;