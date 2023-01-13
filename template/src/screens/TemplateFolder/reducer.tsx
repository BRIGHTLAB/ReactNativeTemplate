import {
  TEMPLATE_DATA_UPDATE
} from './types';

const INITAL_STATE = {
  loading: false,
  data: []
};

export default (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case TEMPLATE_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
