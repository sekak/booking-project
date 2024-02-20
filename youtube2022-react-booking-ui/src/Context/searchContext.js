import { createContext, useEffect, useReducer } from "react"

const INIT_CONTEXT = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    }
}


export const SearchContext = createContext(INIT_CONTEXT)

const SearchReducer = (state, action)=>{
    switch (action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "REST_SEARCH":
            return INIT_CONTEXT;
        default:
            return state;
    }
}

export const SearchContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(SearchReducer, INIT_CONTEXT)
    return (
        <SearchContext.Provider value={{city: state.city, dates: state.dates, options: state.options, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}
// in beginner state take a values of INIT_CONTEXT 
// when received a dispatch with type "NEW_SEARCH" the state will be updated with the payload
// when received a dispatch with type "REST_SEARCH" the state will be updated with the INIT_CONTEXT
// the SearchContextProvider will provide the state and dispatch to the children
// so when recieved a dispatch passed to the searchContext function to check case and update the state and return the new state to the children components 
// the children components will use the context to get the state and dispatch to update the state

