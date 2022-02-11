// Reducer => simply a function that takes in an old state and an action ==> returns a new state
export const contextReducer = (state,action) => {
    switch(action.type){
        case "DELETE_TRANSACTION":
            return state.filter(transaction => transaction.id !== action.payload)
        case "ADD_TRANSACTION":
            return [...state,action.payload]
        default:
            return state;
    }
}