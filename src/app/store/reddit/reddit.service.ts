import { Injectable } from '@angular/core/';
import { Http } from '@angular/http';
import { Post } from './models/post.model';

@Injectable()
export class RedditService {

  public readonly basePath = 'https://www.reddit.com/';

  constructor(private http: Http) { }

  public list(rank: string = 'hot') {
    return this.http.get(`${this.basePath}${rank}.json`)
      .map(res => res.json())
      .map(res => res.data.children)
      .map(this.mapToModel)
      .do(p => console.log(p));
  }

  private mapToModel(posts: any[]) {
    return posts.map(p => {
      const post: Post = { };
      const data = p.data;

      post.subreddit = data.subreddit;
      post.author = data.author;
      post.created = data.created;
      post.score = data.score;
      post.numComments = data.num_comments;
      post.permalink = data.permalink;
      post.title = data.title;
      post.url = data.url;
      post.thumbnail = data.thumbnail;
      post.preview = data.preview;

      return post;
    });
  }
}
