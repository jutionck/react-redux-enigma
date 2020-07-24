const initialState = {
    foods: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_FOODS":
            return { ...state, foods: action.data };

        default:
            return state;
    }
};

export default reducer;