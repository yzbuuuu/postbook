import {configureStore, createSlice} from '@reduxjs/toolkit';
import postReducer from "./stateSlice/postsSlice"

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
