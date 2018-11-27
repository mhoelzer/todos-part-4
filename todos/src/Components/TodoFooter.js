import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { clearCompletedTodos } from "../Actions/actions" // if it's called index.js, you dont need to add it 

class TodoFooter extends Component {
    render() {
        // if dont do this, change this to match the stuff with todos and this.state
        const { completed, handleDestroyAllCompletedTodos } = this.props;
        return (
            <footer className="footer">
                {/* should be 0 default; change to {completed} */}
                <span className="todo-count"><strong>{completed}</strong> item(s) left</span>
                <ul className="filters">
                    {/* if do NavLink, add in activeClassName="selected" and add exact to each, or if have the switch, just put with / in route; or classname={filter === "all"?"seected":""} */}
                    <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li>
                    <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li>
                    <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
                </ul>
                <button className="clear-completed" onClick={handleDestroyAllCompletedTodos}>Clear completed</button>
            </footer>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        // there is a todos prop on state
        // todos: state.todos.filter(todo => !todo.completed).length
        todos: state.todos
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // call actionCreater() and dispatch it to the redux reducer; could alwayes just write as cCT() as long as named as same thing as prop in comp above and put in {} inside connect
        clearCompletedTodos: () => dispatch(clearCompletedTodos())
    }
};
// if export derfault, dont have to use the same name; this one isnt nameed at all
// connect decides when to call these functions; helps relay stuff into react; dont have to pass down props to mult levels; can modify any state on one comp 
export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
// export default TodoFooter;