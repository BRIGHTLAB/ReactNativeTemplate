import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store';

// import from here
import {
 ForgotPasswordView,
 StartView,
 SignUpView,
  HomeView,
  LoginView
} from 'src/screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export default function () {
  // add all screens below
  Navigation.registerComponent('Login', () => WrappedComponent(LoginView));
  Navigation.registerComponent('Home', () => WrappedComponent(HomeView));
Navigation.registerComponent('SignUpView', () => WrappedComponent(SignUpView));
Navigation.registerComponent('StartView', () => WrappedComponent(StartView));
Navigation.registerComponent('ForgotPasswordView', () => WrappedComponent(ForgotPasswordView));
  
  console.info('All screens have been registered...');
}
