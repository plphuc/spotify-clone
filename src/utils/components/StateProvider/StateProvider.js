import { useContext, useReducer, createContext } from "react";

export const StateContext = createContext()

export const StateProvider = ({initialState, reducer, children}) => (
    // useReducer returns value and dispatch function
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)