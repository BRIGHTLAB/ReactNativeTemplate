import React, {useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {State as TemplateFolderState} from './reducer';

// action
import {templateViewChangeValue} from './actions';

const TemplateFolder = (props: any) => {
  interface State {
    templateReducer: TemplateFolderState;
  }

  // get the reducers
  const {loading} = useSelector(({templateReducer}: State) => templateReducer);

  return (
    <SafeAreaView style={styles.root}>
      <Text>Template</Text>
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
  templateViewChangeValue,
})(TemplateFolder);
