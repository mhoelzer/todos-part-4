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
            const newTodosMinusCompleted = state.todoList.filter(todo => !todo.completed)
            console.log("test ")
            return {
                ...state,
                todoList: newTodosMinusCompleted
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
            const newTodosWithToggles = state.todoList.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                ...state,
                todoList: newTodosWithToggles
            };
        default:
            return state;
    }
};

export default todosReducer;