import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Layout] Open SideNav';
export const CLOSE_SIDENAV = '[Layout] Close SideNav';

export class OpenSidenavAction implements Action {
  public type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  public type = CLOSE_SIDENAV;
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;
