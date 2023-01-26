import {
  FORGOTPASSWORDVIEW_DATA_UPDATE
} from './types';
export interface State {
  loading: boolean;
  email: string;
}

const INITAL_STATE : State = {
  loading: false,
  email: ''
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case FORGOTPASSWORDVIEW_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
