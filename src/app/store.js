 import{configureStore} from "@reduxjs/toolkit"
 import postReducer from "../features/posts/postsSlice"
 import useReducer  from "../features/users/usersSlice"

 export const store=configureStore({
    reducer:{
        posts:postReducer,
        users:useReducer

    }
 })
 

 