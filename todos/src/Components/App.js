import React, { Component } from 'react';
import TodoList from "./TodoList.js";
import { Switch, Route } from "react-router-dom";
import todoList from '../todos.json';

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
      completed: todos.filter(todo => !todo.completed).length
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

export default App;