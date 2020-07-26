const initialState = {
    foods: [],
};

const foodTodo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_FOODS":
            return { ...state, foods: action.data };
        default:
            return state;
    }
};

export default foodTodo;