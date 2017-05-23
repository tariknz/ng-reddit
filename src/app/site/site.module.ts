import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { PostComponent } from './list/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule,
  ],
  declarations: [ContainerComponent, ListComponent, PostComponent]
})
export class SiteModule { }
