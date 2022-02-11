// first import useReducer and createcontext from react
import React,{useReducer,createContext} from "react"
//importing context reducer
import contextReducer from "./contextReducer"



//create an inital-state
const initalState = []
const ExpenseTrackerContext = createContext(initalState)

//create a functional component for the provider
export const Provider = ({children}) => {
    //using reducer
    const [transactions,dispatch] = useReducer(contextReducer,initalState)

    //Action creators remember the dispath takes in actions
    const deleteTransaction = (id) => dispatch({type:"DELETE_TRANSACTION",payload:id})
    const addTransaction = (transactions) => dispatch({type:"ADD_TRANSACTION",payload:transactions})
    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,addTransaction
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}