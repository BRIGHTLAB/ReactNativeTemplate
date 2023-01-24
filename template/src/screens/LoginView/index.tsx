import React, {useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {InputText, Button} from 'src/sharedComponents';

// action
import {login, loginViewChangeValue} from './actions';

const LoginView = (props: any) => {
  // get the reducers
  const {loading, data, username, password} = useSelector(
    ({loginReducer}) => loginReducer,
  );

  useEffect(() => {
    props.loginViewChangeValue({
      username: '',
      password: '',
    });

    return () => {
      props.loginViewChangeValue({
        username: '',
        password: '',
      });
    };
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Username"
            value={username}
            onChangeText={(text: any) =>
              props.loginViewChangeValue({
                username: text,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Password"
            value={password}
            onChangeText={(text: any) =>
              props.loginViewChangeValue({
                password: text,
              })
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Login"
            onPress={() => props.login(username, password)}
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
});

export default connect(null, {
  login,
  loginViewChangeValue,
})(LoginView);
