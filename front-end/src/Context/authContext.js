import { createContext, useEffect, useReducer } from "react";

const INIT_CONTEXT = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
    loading: false
}

export const AuthContext = createContext(INIT_CONTEXT);

const AuthContextReducer = (state, action) => {
    switch (action.type){
        case "LOGIN_START":
            return{
                user: null,
                error: null,
                loading: true
            }
        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                loading: false, 
                error: null
            }
        case "LOGIN_FAILURE":
            return{
                user: null,
                error: action.payload,
                loading: false
            }
        case "LOGOUT":
                return INIT_CONTEXT;
        default:
            return state;
    }
}

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthContextReducer, INIT_CONTEXT);
    // useEffect(()=>{
    //     localStorage.setItem("user", JSON.stringify(state.user))
    // },[state.user])
    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}