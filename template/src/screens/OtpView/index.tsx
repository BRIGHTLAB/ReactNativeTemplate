import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {State as OtpViewState} from './reducer';

// action
import {OtpViewChangeValue} from './actions';

const OtpView = (props: any) => {
  interface State {
    otpViewReducer: OtpViewState;
  }

  // get the reducers
  const {loading, code} = useSelector(({otpViewReducer}: State) => otpViewReducer);

  return (
    <View style={styles.root}>
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={4}
        code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged = {code => { props.OtpViewChangeValue({
          code: code
        })}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black'
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default connect(null, {
  OtpViewChangeValue,
})(OtpView);
