import axios from 'axios';
import realm from 'src/models';
import store from 'src/store';

// Add a request interceptor
axios.interceptors.request.use(
  async config => {
    config.baseURL = 'https://api.domain.com';

    // adding the token if the user exists in the local database
    const user = realm.objects('User');
    // const language = realm.objectForPrimaryKey('Settings', 'language');
    //
    if (user.length > 0) {
      config.headers['Authorization'] = 'Bearer ' + user[0].token;
      //   config.headers['x-locale'] = language.value || 'en';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return {...response};
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 403 &&
      originalRequest.url === '/v1/refresh_token'
    ) {
      console.log('refresh failed, logging out');
      // store.dispatch(logout());
      return Promise.reject(error);
    }

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log('trying to refresh token');

      const user = realm.objects('User');
      if (user.length > 0) {
        return axios
          .post('/v1/refresh_token', null, {
            headers: {
              Authorization: `Bearer ${user[0].refresh_token}`,
            },
          })
          .then(response => {
            realm.write(() => {
              let user = realm.objects('User')[0];
              user.token = response.data.token;
              user.refreshToken = response.data.refresh_token;
            });
            console.log('continue, request', originalRequest.url);
            return axios(originalRequest);
          });
      }
    }

    return Promise.reject(error);
  },
);

export default axios;
