import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import queryString from "query-string";
import TodoItem from "./TodoItem.js";
import todoList from '../todos.json';

class TodoList extends Component {
    state = {
        todos: todoList
    };    
    render() {
        const { todos } = this.props;
        return (
            <React.Fragment>
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={this.props.handleAddTodo} />
                    {/* the autoFocus auto sleects that input, so it makes it faster for the user; cAn do for loginbox */}
                </header>
                <section className="main">
                    <ul className="todo-list">
                        {/* when put in comp state; when inside the map function, it will be a single todo */}
                        {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed} handleToggleCompletedTodo={this.props.handleToggleCompletedTodo(todo.id)} handleDestroyOne={this.props.handleDestroyOne(todo.id)} />)}
                        {/* call the hTCT and pass in the todoid and store inside clickedTodoId var, which causes cTI to be in scope for event function  --> completeTodo can also just be hTCT; it rerenders only 1 when props change */}
                    </ul>
                </section>
                <footer className="footer">
                    {/* should be 0 default; change to {completed} */}
                    <span className="todo-count"><strong>{this.props.completed}</strong> item(s) left</span>
                    <ul className="filters">
                    {/* if do NavLink, add in activeClassName="selected" and add exact to each, or if have the switch, just put with / in route; or classname={filter === "all"?"seected":""} */}
                        <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li>
                        <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li>
                        <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
                    </ul>
                    <button className="clear-completed" onClick={this.props.handleDestroyAllCompletedTodos}>Clear completed</button>
                </footer>
            </React.Fragment>
        );
    };
};

export default TodoList;