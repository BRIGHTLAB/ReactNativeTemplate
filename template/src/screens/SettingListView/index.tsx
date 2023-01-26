import React, {useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {State as SettingListViewState} from './reducer';
import DeviceInfo from 'react-native-device-info';

// action
import {SettingListViewChangeValue} from './actions';

const SettingListView = (props: any) => {
  interface State {
    settingListViewReducer: SettingListViewState;
  }

  // get the reducers
  const {loading} = useSelector(({settingListViewReducer}: State) => settingListViewReducer);

  return (
    <SafeAreaView style={styles.root}>
      <Text>App Version: {DeviceInfo.getVersion()}</Text>
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
  SettingListViewChangeValue,
})(SettingListView);
