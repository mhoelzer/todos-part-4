import React, { Component } from 'react';
import TodoList from "./TodoList.js";
import { Switch, Route } from "react-router-dom";
import todoList from '../todos.json';
import { connect } from 'net';
import {  } from "../Actions/actions" // if it's called index.js, you dont need to add it 

class App extends Component {
  state = {
    todos: todoList
  };

  // function inside funciton; once called the first time, the first outer funxtion will run and implicitly returns inner function (the event handler); first param is event obj sent from dom; cTI can be accessed inside inner funct
  handleToggleCompletedTodo = clickedTodoId => event => {
    // map makes new array to get results in newtodos
    const newTodos = this.state.todos.map(todo => {
      // get todo id that matches one was clicked; if this is false, no run
      if (todo.id === clickedTodoId) {
        // change completed value/any boolean value (t vs f)
        todo.completed = !todo.completed;
      }
      return todo; // have to return original todo obj
    });
    // overwrite todos w/ newtodos
    this.setState({ todos: newTodos });
  };

  // need to ahndle something with dom, so keep this
  // because "editting" or w/e cause of state, not "reading", inside the heder, have null for mSTP; info getting dispatched is w/e you enter 
  handleAddTodo = event => {
    const { todos } = this.state;
    let makeId = Math.floor(Math.random() * 333666999);
    if (event.keyCode === 13) { // 13 is the code for enter; could also do event.key == "Enter"
      let newTodos = todos.slice(0); // copy curr arr and return new; can go back in time 
      let newlyEnteredTodo = {
        userId: 1,
        id: makeId,
        title: event.target.value,
        completed: false
      };
      newTodos.push(newlyEnteredTodo);
      this.setState({ todos: newTodos });
      event.target.value = "";
    };
  };

  // will lose these handlers b/c just data and not doing stuffon dom
  handleDestroyOne = clickedTodoId => event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.id === clickedTodoId) {
        return false
      }
      return true;
    });
    this.setState({ todos: newTodos });
  };

  handleDestroyAllCompletedTodos = event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.completed === true) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  };
  render() {
    const { todos } = this.state;
    const allHandlingProps = {
      handleAddTodo: this.handleAddTodo,
      handleDestroyOne: this.handleDestroyOne,
      handleToggleCompletedTodo: this.handleToggleCompletedTodo,
      handleDestroyAllCompletedTodos: this.handleDestroyAllCompletedTodos,
      // completed: todos.filter(todo => !todo.completed).length
    };
    return (
      <section className="todoapp">
        <Switch>
          <Route path="/active" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => !todo.completed)} />} />
          <Route path="/completed" render={props => <TodoList {...props} {...allHandlingProps} todos={todos.filter(todo => todo.completed)} />} />
          <Route path="/" render={props => <TodoList {...props} {...allHandlingProps} todos={todos} />} />
        </Switch>
      </section>
    );
  };
};

// cut out all ofr the state stuff above b/c state will be handled by redux 
// this state is entire redux state
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

// if export derfault, dont have to use the same name; this one isnt nameed at all
// connect decides when to call these functions; helps relay stuff into react; dont have to pass down props to mult levels; can modify any state on one comp 
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;