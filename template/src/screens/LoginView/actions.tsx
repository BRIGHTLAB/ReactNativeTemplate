import {
  LOGIN_DATA_UPDATE,
} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'src/navigation/navigationStructures';

export const loginViewChangeValue = (object: any) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_DATA_UPDATE,
      payload: object,
    });
  };
};

export const login = (username: string, password:string) => {
  return async dispatch => {
      try{

        dispatch({
          type: LOGIN_DATA_UPDATE,
          payload: {
            loading: true
          },
        });

        console.log('username', username);
        console.log('password', password);

        // everything is ok ......
        // navigate to app, the user is logged in
        Navigation.setRoot(mainRoot);

        dispatch({
          type: LOGIN_DATA_UPDATE,
          payload: {
            loading: false
          },
        });

      }catch (e) {
        // if lofin error
        console.log('Error in logging in', e);
        dispatch({
          type: LOGIN_DATA_UPDATE,
          payload: {
            loading: false
          },
        });
      }
  };
};

