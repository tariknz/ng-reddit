import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromLayout from './layout/layout.reducers';
import * as fromPosts from './reddit/posts.reducers';

export interface State {
  layout: fromLayout.State;
  posts: fromPosts.State;
  router: fromRouter.RouterState;
}

const reducers = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
  posts: fromPosts.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Layout Reducers
 */
export const getLayoutState = (state: State) => state.layout;
export const getPostsState = (state: State) => state.posts;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getPosts = createSelector(getPostsState, fromPosts.getPosts);
