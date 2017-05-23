import { Action } from '@ngrx/store';
import { Post } from './models/post.model';

export const LOAD_POSTS = '[Posts] Load Posts';
export const LOAD_POSTS_COMPLETE = '[Posts] Load Posts Complete';

export class LoadPostsAction implements Action {
  public type = LOAD_POSTS;
}

export class LoadPostsCompleteAction implements Action {
  public type = LOAD_POSTS_COMPLETE;

  constructor(public payload: Post[]) { }
}

export type Actions
  = LoadPostsAction
  | LoadPostsCompleteAction;
