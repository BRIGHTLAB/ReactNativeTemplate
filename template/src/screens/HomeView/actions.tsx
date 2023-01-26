import {
  HOME_STATUS_CHANGE,
} from './types';
import {Platform} from 'react-native';
import axios from 'src/axiosConfig';
import realm from 'src/models';


export const homeViewChangeValue = (object: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: HOME_STATUS_CHANGE,
      payload: object,
    });
  };
};

export const loadData = () => {
  return async (dispatch: any) => {
    console.log('load data')
  };
};

export const registerPushToken = (token: any) => {
  return async (dispatch: any) => {
    return;
    // try {
    //   const obj = {
    //     token: token,
    //     device_type: Platform.OS,
    //   };
    //   console.log('trying to send PN', obj);
    //   const user = realm.objects('User')[0];
    //   const response = await axios.post(
    //     `/v1/users/${user.id}/push_notification`,
    //     obj,
    //   );
    //   console.log('push notification sent');
    // } catch (e) {
    //   console.log('error sending push token to server', e);
    // }
  };
};
