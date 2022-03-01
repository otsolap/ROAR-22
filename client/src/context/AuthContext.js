import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
        _id: '621dc7695da7d0f7d5007076',
        username: "Testimies",
        email: "Testi@email.com",
        profilePicture: "https://avatars.githubusercontent.com/u/59653348?s=400&u=ded860ea0260c5c33ec0208cd7f2f1ec796f3057&v=4",
        coverPicture: "https://images.unsplash.com/photo-1518124880777-cf8c82231ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80",
        following: [
            "621ddff92d9aa271c9ec4e8a",
        ],
        followers: []
    },
    isFetching: false,
    error: false
}


export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    // value, funktio. Dispatch is always the function.
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)


    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}