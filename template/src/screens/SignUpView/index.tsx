import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING, REGEX} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {InputText, Button} from 'src/sharedComponents';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// action
import {SignUpViewChangeValue, signUp} from './actions';

const SignUpView = props => {
  // get the reducers
  const {loading, data, firstName, lastName, email, phone_number, password} =
    useSelector(({signUpViewReducer}) => signUpViewReducer);

  useEffect(() => {
    props.SignUpViewChangeValue({
      firstName: '',
      lastName: '',
      email: '',
      phone_number: '',
      password: '',
    });

    return () => {
      props.SignUpViewChangeValue({
        firstName: '',
        lastName: '',
        email: '',
        phone_number: '',
        password: '',
      });
    };
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="First Name"
            value={firstName}
            regex={REGEX.ALPHANUMERIC_50.regex}
            notValidText={REGEX.ALPHANUMERIC_50.valFailureMsg}
            onChangeText={(text: any) =>
              props.SignUpViewChangeValue({
                firstName: text,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Last Name"
            value={lastName}
            regex={REGEX.ALPHANUMERIC_50.regex}
            notValidText={REGEX.ALPHANUMERIC_50.valFailureMsg}
            onChangeText={(text: any) =>
              props.SignUpViewChangeValue({
                lastName: text,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Email"
            value={email}
            regex={REGEX.EMAIL.regex}
            notValidText={REGEX.EMAIL.valFailureMsg}
            onChangeText={(text: any) =>
              props.SignUpViewChangeValue({
                email: text,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Phone Number"
            value={phone_number}
            regex={REGEX.INT_PHONE.regex}
            notValidText={REGEX.INT_PHONE.valFailureMsg}
            onChangeText={(text: any) =>
              props.SignUpViewChangeValue({
                phone_number: text,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Password"
            value={password}
            regex={REGEX.PASSWORD.regex}
            notValidText={REGEX.PASSWORD.valFailureMsg}
            secureTextEntry={true}
            onChangeText={(text: any) =>
              props.SignUpViewChangeValue({
                password: text,
              })
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Sign Up"
            onPress={() =>
              props.signUp(firstName, lastName, email, password, phone_number)
            }
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
  SignUpViewChangeValue,
  signUp,
})(SignUpView);
