export const userReducer = (user = {}, action) => {
    if(action.type === 'USER') {
        return action.payload;
    }
    return user;
}