import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'app/store';
import { LoadPostsAction } from '../../store/reddit/posts.actions';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../store/reddit/models/post.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() {
    this.store.dispatch(new LoadPostsAction());
    this.posts$ = this.store.select(fromRoot.getPosts);
  }

}
