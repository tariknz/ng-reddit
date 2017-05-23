import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { reducer } from './index';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './reddit/posts.effects';
import { RedditService } from './reddit/reddit.service';

@NgModule({
  imports: [
    NgrxStoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(PostsEffects),
  ],
  declarations: [],
  providers: [RedditService]
})
export class StoreModule { }
