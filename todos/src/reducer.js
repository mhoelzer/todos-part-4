import { ADD_TODO, CLEAR_COMPLETED_TODOS, DELETE_TODO, TOGGLE_TODO } from "./actions"

const initialState = {
    todo: []
};

const dotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
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

