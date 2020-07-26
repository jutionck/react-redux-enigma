const initialState = {
    users: [],
};

const userTodo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, users: action.data };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((users) => users.id !== action.id)
            }
        case 'EDIT_USER':
            return {
                ...state,
                users: state.map((users) => users.id === action.id ? {...users ,editing:!users.editing}:users)
            }
        case 'UPDATE':
            return state.map((user)=>{
                console.log(user)
                if(user.id === action.id) {
                    return {
                        ...user,
                        users: action.data,
                        editing: !user.editing
                    }
                } else return user;
            })
        default:
            return state;
    }
};

export default userTodo;