import { Actions, LOAD_POSTS, LOAD_POSTS_COMPLETE, LoadPostsCompleteAction } from './posts.actions';
import { Post } from './models/post.model';
export interface State {
  posts: Post[];
}

const initialState: State = {
  posts: [],
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case LOAD_POSTS_COMPLETE:
      return {
        posts: (action as LoadPostsCompleteAction).payload,
      };
    default:
      return state;
  }
}

export const getPosts = (state: State) => state.posts;
