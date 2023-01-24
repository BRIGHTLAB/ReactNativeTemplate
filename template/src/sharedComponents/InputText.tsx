import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

const InputText = (props: any) => {
  const [value, setValue] = useState('' || props.defaultValue);

  const handleChange = (text: any) => {
    setValue(text);
    if (props.onChangeText) props.onChangeText(text);
  };

  const handleOnEndEditing = (text: any) => {
    setValue(text.nativeEvent.text);
    if (props.onEndEditing) props.onEndEditing(text.nativeEvent.text);
  };

  return (
    <View style={[styles.mainOuterContainer, props.mainOuterContainer]}>
      <TextInput
        ref={props.forwardRef}
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={handleChange}
        value={props.value}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        autoCorrect={false}
        autoComplete={'off'}
        autoCapitalize={'none'}
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid="transparent"
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onEndEditing={handleOnEndEditing}
        editable={props.editable}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
      />
      {props.icon ? (
        <TouchableOpacity
          disabled={props.iconDisabled}
          onPress={props.onIconPress}>
          <Image source={props.icon} style={styles.image} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainOuterContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    paddingLeft: 25,
    paddingRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  image: {
    height: 33,
    width: 33,
  },
});

export default InputText;
