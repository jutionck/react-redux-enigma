const initialState = {
    history: [],
};

const historyTodo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_HISTORY":
            return { ...state, history: action.data }
        default:
            return state;
    }
};

export default historyTodo;