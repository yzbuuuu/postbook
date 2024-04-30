import {createEpicMiddleware, ofType} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {map, mergeMap, catchError, switchMap, tap} from 'rxjs/operators';
import {of, concat, Observable} from 'rxjs';
import {Action} from '@reduxjs/toolkit';
import uesrReducer, {
  fetchUsers,
  fetchUsersFulfilled,
  fetchUsersRejected,
} from '../stateSlice/userSlice';
import postReducer, {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
  addPostsStart,
  addPostSuccess,
  addPostFailure,
  deletePost,
  refreshingPosts,
  refreshingPostsSuccess,
  refreshingPostsFailure,
} from '../stateSlice/postsSlice';
import {POSTS_URL} from '../../api/apiConstants';

export const fetchUsersEpic = action$ =>
  action$.pipe(
    ofType(fetchUsers.type),
    mergeMap(() =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/users`).pipe(
        map(response => fetchUsersFulfilled(response)),
        catchError(error => of(fetchUsersRejected(error.message))),
      ),
    ),
  );

export const fetchPostsEpic = action$ =>
  action$.pipe(
    ofType(fetchPostsStart.type),
    tap(action => console.log('Action received in Epic:', action)),
    switchMap(() =>
      ajax.getJSON(POSTS_URL).pipe(
        tap(posts => console.log('Received posts:', posts)),
        map(posts => fetchPostsSuccess(posts)),
        catchError(error => of(fetchPostsFailure(error.message))),
      ),
    ),
  );

export const addPostEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.pipe(
    ofType(addPost.type),

    switchMap(action =>
      concat(
        of(addPostsStart()),
        ajax
          .post(POSTS_URL, action.payload, {
            'Content-Type': 'application/json',
          })
          .pipe(
            map(response => addPostSuccess(response.response)),
            catchError(error => of(addPostFailure(error.message))),
          ),
      ),
    ),
  );

export const deletePostEpic = (
  action$: Observable<Action>,
): Observable<Action> =>
  action$.pipe(
    ofType(deletePost.type),

    switchMap(action => concat(of())),
  );

export const refreshingPostsEpic = action$ =>
  action$.pipe(
    ofType(refreshingPosts.type),
    tap(action => console.log('refreshing...', action)),
    switchMap(() =>
      ajax.getJSON(POSTS_URL).pipe(
        tap(posts => console.log('Received posts:', posts)),
        map(posts => refreshingPostsSuccess(posts)),
        catchError(error => of(refreshingPostsFailure(error.message))),
      ),
    ),
  );
