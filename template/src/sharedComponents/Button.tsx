import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  image?: boolean;
  imageChild?: JSX.Element;
  buttonContainerStyle?: object;
  imageContainerStyle?: object;
  textStyle?: object;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.buttonContainerStyle
      ]}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.loading ? (
        <View style={{paddingVertical: Platform.OS === 'android' ? 2 : 0}}>
          <ActivityIndicator size={'small'} color="white" />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          {props.image ? (
            <View style={[styles.imageContainer, props.imageContainerStyle]}>{props.imageChild}</View>
          ) : null}
          <Text
            style={[
              styles.text,
              props.textStyle
            ]}>
            {props.text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    border: 1,
    backgroundColor:'black'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  imageContainer: {
    marginRight: 10,
  },
});

export default Button;
