import { Actions, OPEN_SIDENAV, CLOSE_SIDENAV } from './layout.actions';
export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
