import {
  STARTVIEW_DATA_UPDATE,
} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'src/navigation/navigationStructures';

export const StartViewChangeValue = (object: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: STARTVIEW_DATA_UPDATE,
      payload: object,
    });
  };
};

