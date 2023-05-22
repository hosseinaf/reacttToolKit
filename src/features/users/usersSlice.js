  import { createSlice } from "@reduxjs/toolkit";

  const initialState=[
    {id:"1",name:"david"},
    {id:'2',name:"chandler"},
    {id:"3",name:"rose"}

  ]

  const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }

  })

  export const selectAllUsers=(state)=>state.users
  export default userSlice.reducer