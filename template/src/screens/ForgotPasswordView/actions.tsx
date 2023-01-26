import {
  FORGOTPASSWORDVIEW_DATA_UPDATE,
} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'src/navigation/navigationStructures';

export const ForgotPasswordViewChangeValue = (object: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: FORGOTPASSWORDVIEW_DATA_UPDATE,
      payload: object,
    });
  };
};

export const submit = (email: string, componentId: any) => {
  return async (dispatch: any) => {
    try {
      console.log('email', email);

      Navigation.pop(componentId);
    } catch (e) {
      console.log('Error in submitting forget password', e);
    }
  }
}

