const initialState = {
    latest: [],
};

const latestTodo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LATEST":
            return { ...state, latest: action.data }
        default:
            return state;
    }
};

export default latestTodo;