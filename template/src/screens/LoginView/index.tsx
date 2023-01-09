import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';

// action
import {
  loadData,
  loginViewChangeValue
} from './actions';

const LoginView = props => {
  // get the reducers
  const {loading, data} = useSelector(
    ({loginReducer}) => loginReducer,
  );

  const handleButtonPress = () => {
    props.loadData();
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text>Login View</Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text>Click me to Login!</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

});

export default connect(null, {
  loadData,
  loginViewChangeValue
})(LoginView);
