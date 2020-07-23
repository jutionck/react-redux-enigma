const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '+':
            return {
                ...state,
                counter: Number(action.operand1) + Number(action.operand2) }
        case '-':
            return {
                ...state,
                counter: Number(action.operand1) - Number(action.operand2) }
        case '/':
            if(action.operand2 == 0 ) {
                alert("Not Zero divide");
            }
            return {
                ...state,
                counter: Number(action.operand1) / Number(action.operand2) }
        case '*':
            return {
                ...state,
                counter: Number(action.operand1) * Number(action.operand2) }
        default:
            return state
    }
}

export default reducer;