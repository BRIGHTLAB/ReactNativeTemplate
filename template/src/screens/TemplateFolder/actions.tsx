import {
  TEMPLATE_DATA_UPDATE,
} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'src/navigation/navigationStructures';

export const templateViewChangeValue = object => {
  return async dispatch => {
    dispatch({
      type: TEMPLATE_DATA_UPDATE,
      payload: object,
    });
  };
};

