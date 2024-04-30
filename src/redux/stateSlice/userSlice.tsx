import {configureStore, createSlice} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

// 创建一个使用 createSlice 的 slice
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsers: state => {
      state.loading = true;
    },
    fetchUsersFulfilled: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchUsers, fetchUsersFulfilled, fetchUsersRejected} =
  usersSlice.actions;
export default usersSlice.reducer;
