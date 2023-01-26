import React, {useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING, REGEX} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {State as ForgotPasswordViewState} from './reducer';

import { InputText, Button } from 'src/sharedComponents';

// action
import {ForgotPasswordViewChangeValue, submit} from './actions';

const ForgotPasswordView = (props: any) => {
  interface State {
    forgotPasswordViewReducer: ForgotPasswordViewState;
  }

  // get the reducers
  const {loading, email} = useSelector(({forgotPasswordViewReducer}: State) => forgotPasswordViewReducer);

  useEffect(() => {
    props.ForgotPasswordViewChangeValue({
      email: ''
    })

    return () => {
      props.ForgotPasswordViewChangeValue({
        email: ''
      })
    }
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
          <InputText
            placeholder="Email"
            value={email}
            regex={REGEX.EMAIL.regex}
            notValidText={REGEX.EMAIL.valFailureMsg}
            onChangeText={(text: any) =>
              props.ForgotPasswordViewChangeValue({
                email: text,
              })
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Submit"
            onPress={() => props.submit(email, props.componentId)}
            disabled={loading}
            loading={loading}
          />
        </View>
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
    paddingLeft: SCREEN_PADDING.left,
    paddingRight: SCREEN_PADDING.right
  },
  inputContainer: {
    paddingBottom: 15,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
  },
});

export default connect(null, {
  ForgotPasswordViewChangeValue,
  submit
})(ForgotPasswordView);
