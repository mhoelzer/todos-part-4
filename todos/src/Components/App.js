import React, { Component } from 'react';
import TodoList from "./TodoList.js";
import { Switch, Route } from "react-router-dom";
import todoList from '../todos.json';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from "../Actions/actions"

class App extends Component {
  // wont need state b/c redux will have the state stuff 

  handleToggleCompletedTodo = clickedTodoId => event => {
    this.props.toggleTodo(clickedTodoId)
  };
  // will lose these handlers b/c just data and not doing stuffon dom
  handleDestroyOne = clickedTodoId => event => {
    this.props.deleteTodo(clickedTodoId);
  };

  render() {
    // console.log(this.props.pathname)
    const { todos } = this.props;
    const allHandlingProps = {
      handleDestroyOne: this.handleDestroyOne,
      handleToggleCompletedTodo: this.handleToggleCompletedTodo,
      completed: todos.filter(todo => !todo.completed).length
    };
    return (
      <section className="todoapp">
        <Switch>
          <Route exact path="/active" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => !todo.completed)} />} />
          <Route exact path="/completed" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => todo.completed)} />} />
          <Route exact path="/" render={props => <TodoList {...props} {...allHandlingProps} todos={todos} />} />
        </Switch>
      </section>
    );
  };
};

// cut out all ofr the state stuff above b/c state will be handled by redux 
// this state is entire redux state
const mapStateToProps = (state) => {
  return {
    todos: state.todoList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

// if export derfault, dont have to use the same name; this one isnt nameed at all
// connect decides when to call these functions; helps relay stuff into react; dont have to pass down props to mult levels; can modify any state on one comp 
export default connect(mapStateToProps, mapDispatchToProps)(App)