import {
  TEMPLATE_DATA_UPDATE
} from './types';
export interface State {
  loading: boolean;
  data: any[];
}

const INITAL_STATE : State = {
  loading: false,
  data: [
    {
      id: 1,
      title: 'title 1'
    },
    {
      id: 2,
      title: 'title 2'
    },
    {
      id: 3,
      title: 'title 3'
    }
  ]
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
