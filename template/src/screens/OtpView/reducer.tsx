import {
  OTPVIEW_DATA_UPDATE
} from './types';
export interface State {
  loading: boolean;
  code: string;
}

const INITAL_STATE : State = {
  loading: false,
  code: ''
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case OTPVIEW_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
