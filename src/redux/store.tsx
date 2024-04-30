import {configureStore, createSlice} from '@reduxjs/toolkit';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import postReducer from './stateSlice/postsSlice';
import userReducer from './stateSlice/userSlice';
import { fetchUsersEpic, refreshingPostsEpic } from './epics';
import { fetchPostsEpic ,addPostEpic} from './epics';

const rootEpic = combineEpics(fetchPostsEpic,addPostEpic,refreshingPostsEpic)

// 创建一个 epic 中间件
const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddlemare)=>getDefaultMiddlemare().concat(epicMiddleware)
});

epicMiddleware.run(rootEpic)

export default store;
