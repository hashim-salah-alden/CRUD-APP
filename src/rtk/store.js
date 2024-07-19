import { configureStore } from '@reduxjs/toolkit';
import posts from "./slices/PostSlice";
import auth from "./slices/authSlice";


const store = configureStore({
  reducer:{
      posts,
      auth,
  }
})

export default store;