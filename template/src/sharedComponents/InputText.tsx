import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions
} from 'react-native';

interface InputTextProps {
  defaultValue?: string;
  onChangeText?: (text: any) => void;
  regex?: RegExp;
  mainOuterContainer?: object;
  inputStyle?: object;
  placeholderTextColor?: string;
  value?: string;
  placeholder?: string;
  autoCorrect?: boolean;
  autoComplete?: string;
  autoCapitalize?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onEndEditing?: (text: any) => void;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  icon?: any;
  iconDisabled?: boolean;
  onIconPress?: () => void;
  notValidText?: string;
  forwardRef?: any;
}

const InputText = (props: InputTextProps) => {
  const [value, setValue] = useState('' || props.defaultValue);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (text: any) => {
    setValue(text);
    if (props.onChangeText) props.onChangeText(text);

    if (props.regex) {
      if (text.match(props.regex)) {
        setIsValid(true);
      } else if (text == '') {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  const handleOnEndEditing = (text: any) => {
    setValue(text.nativeEvent.text);
    if (props.onEndEditing) props.onEndEditing(text.nativeEvent.text);
  };

  return (
    <View>
      <View
        style={[
          styles.mainOuterContainer,
          props.mainOuterContainer,
          {borderColor: isValid ? 'black' : 'red'},
        ]}>
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
      {!isValid ? (
        <Text style={styles.notValid}>{props.notValidText}</Text>
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
  notValid: {
    color: 'red',
    fontSize: 12,
    paddingTop: 5,
  },
});

export default InputText;
