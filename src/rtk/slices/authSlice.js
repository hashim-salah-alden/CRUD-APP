import { createSlice } from "@reduxjs/toolkit";

const initialState = {loggedIn : false}
const authSlice =  createSlice({
  name : "auth",
  initialState,
  reducers:{
    logInOut : (state,action) => {
        state.loggedIn = !action.payload;
    }
  }
})


export const {logInOut} = authSlice.actions;
export default authSlice.reducer;