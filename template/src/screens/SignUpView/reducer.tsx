import {
  SIGNUPVIEW_DATA_UPDATE
} from './types';

export interface State {
  loading: boolean;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone_number: string;
}

const INITAL_STATE : State = {
  loading: false,
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  phone_number: ''
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case SIGNUPVIEW_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
