import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Post, PostsState} from '../../types/models';
import {act} from 'react-test-renderer';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  fetchSuccess: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      if (action.payload == null) {
        state.posts = [];
      } else {
        state.posts = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const index = state.posts.findIndex(post => post.id === action.payload);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
    deletePostsStart: state => {
      state.loading = true;
      state.error = null;
    },
    deletePostSuccess: state => {
      state.loading = false;
      state.error = null;
    },
    deletePostFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPost: (
      state,
      action: PayloadAction<{title: string; content: string}>,
    ) => {
      const newPost = {
        id: Date.now(),
        isFavorited: false,
        title: action.payload.title,
        content: action.payload.content,
      };
      state.posts.unshift(newPost);
    },
    addPostsStart: state => {
      state.loading = true;
      state.error = null;
    },
    addPostSuccess: state => {
      state.loading = false;
      state.error = null;
    },
    addPostFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        post => post.id === action.payload.id,
      );
      if (index !== -1) {
        state.posts[index] = {...state.posts[index], ...action.payload};
      }
    },
    refreshingPosts: () => {},
    refreshingPostsStart: state => {
      state.loading = true;
      state.error = null;
    },
    refreshingPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      if (action.payload == null) {
        state.posts = [];
      } else {
        state.posts = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    refreshingPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  deletePost,
  addPost,
  updatePost,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPostsStart,
  addPostSuccess,
  addPostFailure,
  refreshingPosts,
  refreshingPostsStart,
  refreshingPostsSuccess,
  refreshingPostsFailure,
} = postsSlice.actions;
export default postsSlice.reducer;
