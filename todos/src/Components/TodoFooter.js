import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { clearCompletedTodos } from "../Actions/actions" 

class TodoFooter extends Component {
    render() {
        // console.log(this.props.filter)
        // if dont do this, change this to match the stuff with todos and this.state
        const { completed, clearCompletedTodos, filter } = this.props;
        return (
            <footer className="footer">
                {/* should be 0 default; change to {completed} */}
                <span className="todo-count"><strong>{completed}</strong> item(s) left</span>
                <ul className="filters">
                    {/* if do NavLink, add in activeClassName="selected" and add exact to each, or if have the switch, just put with / in route; or classname={filter === "all"?"seected":""} */}
                    <li><Link to="/" className={filter === "/" ? "selected" : ""}>All</Link></li>
                    <li><Link to="/active" className={filter === "/active" ? "selected" : ""}>Active</Link></li>
                    <li><Link to="/completed" className={filter === "/completed" ? "selected" : ""}>Completed</Link></li>
                </ul>
                <button className="clear-completed" onClick={clearCompletedTodos}>Clear completed</button>
            </footer>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        // there is a todos prop on state
        todos: state.todoList
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);