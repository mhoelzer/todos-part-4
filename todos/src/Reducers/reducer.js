import { ADD_TODO, CLEAR_COMPLETED_TODOS, DELETE_TODO, TOGGLE_TODO } from "../Actions/actions.js";
import todoList from '../todos.json'; // this will get the collection of all the messages and can put in the inital state

const initialState = {
    todoList
};


const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let makeId = Math.floor(Math.random() * 333666999);
            let newlyEnteredTodo = {
                userId: 1,
                id: makeId,
                title: action.payload,
                completed: false
            };
            // wont be an array because this has to deal with wha the initial sate already looks like 
            return {
                ...state,
                todoList: [...state.todoList, newlyEnteredTodo]
            };
        case CLEAR_COMPLETED_TODOS:
            return {
                ...state,
                todoList: [...state.todoList, todoList.filter(todo => !todo.completed).length]
            };
        case DELETE_TODO:
            const newTodosMinusOne = state.todoList.filter(todo => {
                if (todo.id === action.payload) {
                    return false
                }
                return true;
            });
            return {
                ...state,
                todoList: newTodosMinusOne
            };
        case TOGGLE_TODO:
            // return {...state, action.todo};
            break;
        default:
            return state;
    }
};

export default todosReducer;