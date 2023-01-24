import {
  SIGNUPVIEW_DATA_UPDATE,
} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {loginRoot} from 'src/navigation/navigationStructures';

export const SignUpViewChangeValue = object => {
  return async dispatch => {
    dispatch({
      type: SIGNUPVIEW_DATA_UPDATE,
      payload: object,
    });
  };
};

export const signUp = (firstName: string, lastName:string, email: string, password: string, phone_number: string) => {
  return async dispatch => {
      try{

        dispatch({
          type: SIGNUPVIEW_DATA_UPDATE,
          payload: {
            loading: true
          },
        });

        console.log('firstName', firstName);
        console.log('lastName', lastName);
        console.log('email', email);
        console.log('phone_number', phone_number);
        console.log('password', password);

        // everything is ok ......
        // navigate to app, the user is logged in
        Navigation.setRoot(loginRoot);

        dispatch({
          type: SIGNUPVIEW_DATA_UPDATE,
          payload: {
            loading: false
          },
        });

      }catch (e) {
        // if lofin error
        console.log('Error in signing up', e);
        dispatch({
          type: SIGNUPVIEW_DATA_UPDATE,
          payload: {
            loading: false
          },
        });
      }
  };
};

