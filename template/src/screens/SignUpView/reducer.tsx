import {
  SIGNUPVIEW_DATA_UPDATE
} from './types';

const INITAL_STATE = {
  loading: false,
  data: [],
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
