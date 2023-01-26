import {
  LOGIN_DATA_UPDATE
} from './types';

export interface State {
  loading: boolean;
  email: string;
  password: string;
}

const INITAL_STATE: State = {
  loading: false,
  email: '',
  password: ''
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
