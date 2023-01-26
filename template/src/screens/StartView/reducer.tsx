import {
  STARTVIEW_DATA_UPDATE
} from './types';
export interface State {
  loading: boolean;
}

const INITAL_STATE : State = {
  loading: false
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case STARTVIEW_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
