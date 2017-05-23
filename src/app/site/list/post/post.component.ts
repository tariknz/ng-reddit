import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../store/reddit/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() public post: Post;

  constructor() { }

  public ngOnInit() {
  }

}
