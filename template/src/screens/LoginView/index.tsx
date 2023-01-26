import React, {useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING, REGEX} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {State as LoginViewState} from './reducer';

import {InputText, Button} from 'src/sharedComponents';

// action
import {login, loginViewChangeValue} from './actions';

const LoginView = (props: any) => {
  interface State {
    loginReducer: LoginViewState;
  }

  // get the reducers
  const {loading, email, password} = useSelector(
    ({loginReducer}: State) => loginReducer,
  );

  useEffect(() => {
    props.loginViewChangeValue({
      email: '',
      password: '',
    });

    return () => {
      props.loginViewChangeValue({
        email: '',
        password: '',
      });
    };
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Email"
            value={email}
            regex={REGEX.EMAIL.regex}
            notValidText={REGEX.EMAIL.valFailureMsg}
            onChangeText={(text: any) =>
              props.loginViewChangeValue({
                email: text,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Password"
            value={password}
            regex={REGEX.PASSWORD.regex}
            secureTextEntry={true}
            notValidText={REGEX.PASSWORD.valFailureMsg}
            onChangeText={(text: any) =>
              props.loginViewChangeValue({
                password: text,
              })
            }
          />
        </View>
        <TouchableOpacity
          style={styles.captionContainer}
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'ForgotPasswordView',
                options: {
                  topBar: {
                    visible: false,
                    backButton: {
                      visible: true,
                    },
                  },
                },
              },
            });
          }}>
          <Text style={styles.caption}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            text="Login"
            onPress={() => props.login(email, password)}
            disabled={loading}
            loading={loading}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: SCREEN_PADDING.right,
    paddingLeft: SCREEN_PADDING.left,
  },
  container: {
    width: '100%',
  },
  inputContainer: {
    paddingBottom: 15,
  },
  buttonContainer: {
    width: '100%',
  },
  captionContainer: {
    paddingBottom: 15,
    alignSelf: 'flex-end',
  },
  caption: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default connect(null, {
  login,
  loginViewChangeValue,
})(LoginView);
