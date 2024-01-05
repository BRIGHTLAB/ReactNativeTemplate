import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';
import {State as TemplateFolderState} from './reducer';

// action
import {templateViewChangeValue} from './actions';

const TemplateListFolder = (props: any) => {
  interface State {
    templateListReducer: TemplateFolderState;
  }

  // get the reducers
  const {loading, data} = useSelector(
    ({templateListReducer}: State) => templateListReducer,
  );

  // Render Item
  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  // Render Header
  const renderHeader = () => {
    return (
      <View
        style={{
          height: 20,
        }}
      />
    );
  };

  // Render Footer
  const renderFooter = () => {
    return (
      <View
        style={{
          height: 20,
        }}
      />
    );
  };

  // Render Separator
  const renderSeparator = () => {
    return (
      <View
        style={{
          width: '100%',
          borderWidth: 1,
        }}
      />
    );
  };

  // Render Empty Cmp
  const renderEmptyCmp = () => {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>No Data available</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyCmp}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
      />
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
})(TemplateListFolder);
