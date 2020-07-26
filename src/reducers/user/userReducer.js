const initialState = {
    users: [],
};

const userTodo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, users: action.data };

        case 'EDIT_USER':
            return {
                ...state,
                users: state.map((users) => users.id === action.id ? { ...users, editing: !users.editing } : users)
            }
        case 'UPDATE':
            return state.map((users) => {
                if (users.id === action.id) {
                    return { ...state, users: action.data };
                } else return state;
            })
        default:
            return state;
    }
};

export default userTodo;