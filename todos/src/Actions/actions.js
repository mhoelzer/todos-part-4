// action type constants = dont have to mistype string (vs code doesnt know if it is)
// the exports are named (when expoted, can only import if spelled the same)
export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// action creators; make action objs (always have type prop, which si what reducerswitch is on); fetch reqs will end up going inside (would go before the second{}); defines what will happen
export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: title
    }
};

export const clearCompletedTodos = () => {
    return {
        type: CLEAR_COMPLETED_TODOS,
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        // what makes actioncreater happen; reducer (in other file) will transform data
        payload: id
    }
};