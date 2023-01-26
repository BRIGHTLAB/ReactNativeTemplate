import React, {useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';

import {Button} from 'src/sharedComponents';

// action
import {StartViewChangeValue} from './actions';

// Reducer
import {State as StartViewState} from './reducer';

const StartView = (props: any) => {
  interface State {
    startViewReducer: StartViewState;
  }

  // get the reducers
  const {loading} = useSelector(
    ({startViewReducer}: State) => startViewReducer,
  );

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <Button
          text="Sign Up"
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'SignUpView',
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
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Login"
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'Login',
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
          }}
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
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: SCREEN_PADDING.left,
    paddingRight: SCREEN_PADDING.right,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 20,
  },
});

export default connect(null, {
  StartViewChangeValue,
})(StartView);
