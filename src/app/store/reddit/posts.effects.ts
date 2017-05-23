import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LOAD_POSTS, LoadPostsCompleteAction } from './posts.actions';
import { RedditService } from './reddit.service';

@Injectable()
export class PostsEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(LOAD_POSTS)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      const nextSearch$ = this.actions$.ofType(LOAD_POSTS).skip(1);

      return this.service.list()
        .takeUntil(nextSearch$)
        .map(posts => new LoadPostsCompleteAction(posts))
        .catch(() => Observable.of(new LoadPostsCompleteAction([])));
    });

    constructor(private actions$: Actions, private service: RedditService) { }
}
