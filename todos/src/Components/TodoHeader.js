import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../Actions/actions"

class TodoHeader extends Component {
    state = {
        title: ""
    };

    handleChange = event => {
        this.setState({
            title: event.target.value
        })
    };

    // without this, it's not a controlled input; not modifying what is being displayed, unless you want it to do something like special char or all caps as person types 
    
    // need to ahndle something with dom, so keep this
    // because "editting" or w/e cause of state, not "reading", inside the heder, have null for mSTP; info getting dispatched is w/e you enter 
    handleAddTodo = event => {
        const { addTodo } = this.props;
        const { title } = this.state;
        if (event.keyCode === 13) { // 13 is the code for enter; could also do event.key == "Enter"
            addTodo(title);
            event.target.value = "";
            // or this.setState({ title: "" });
        };
    };

    render() {
        const { title } = this.state;
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={this.handleChange} onKeyDown={this.handleAddTodo} value={title} />
                {/* the autoFocus auto sleects that input, so it makes it faster for the user; cAn do for loginbox */}
            </header>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: title => dispatch(addTodo(title))
    }
};
export default connect(null, mapDispatchToProps)(TodoHeader);