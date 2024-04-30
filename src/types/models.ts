// Define the type for a single post
export interface Post {
  id: number;
  title: string;
  content: string;
  isFavorited: boolean;
}

// Define the type for the slice state
export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchSuccess: boolean;
}
