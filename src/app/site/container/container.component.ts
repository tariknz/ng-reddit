import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRoot from 'app/store';
import { OpenSidenavAction, CloseSidenavAction } from '../../store/layout/layout.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MdSidenav) public sidenav: MdSidenav;

  public showSideNavSub: Subscription;
  public showSideNav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSideNav$ = store.select(fromRoot.getShowSidenav);
  }

  public ngAfterViewInit() {

  }

  public ngOnDestroy() {
    if (this.showSideNavSub) {
      this.showSideNavSub.unsubscribe();
    }
  }

  public toggleSideNav() {
    console.log(this.sidenav.opened);
    if (this.sidenav.opened) {
       this.store.dispatch(new CloseSidenavAction());
    } else {
      this.store.dispatch(new OpenSidenavAction());
    }
  }

  public closeSideNav() {
    this.store.dispatch(new CloseSidenavAction());
  }
}
