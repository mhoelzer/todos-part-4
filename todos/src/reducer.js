import { ADD_TODO, CLEAR_COMPLETED_TODOS, DELETE_TODO, TOGGLE_TODO } from "./actions.js";
import todoList from './todos.json'; // this will get the collection of all the messages and can put in the inital state

const initialState = {
    todoList
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        // wont be an array because this has to deal with wha tthe initial sate already looks like 
            return [...state, action.todo];
            break;
        case CLEAR_COMPLETED_TODOS:
            return [...state, action.todo];
            break;
        case DELETE_TODO:
            return [...state, action.todo];
            break;
        case TOGGLE_TODO:
            return [...state, action.todo];
            break;
        default:
            return state;
    }
};

export default todosReducer;