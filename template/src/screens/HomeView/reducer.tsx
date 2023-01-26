import {
  HOME_STATUS_CHANGE
} from './types';

export interface State {
  loading: boolean;
  data: any[];
} 

const INITAL_STATE: State = {
  loading: false,
  data: []
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case HOME_STATUS_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
