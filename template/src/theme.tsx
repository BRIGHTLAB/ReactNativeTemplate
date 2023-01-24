import {Platform} from 'react-native';

export const COLORS = {
  primary: '#2260B0',
  bgColor: '#F1F1F6',
  danger: '#D31F3D',
  secondary: '#EBC943',
};

export const SCREEN_PADDING = {
  left: Platform.OS === 'ios' ? 20 : 10,
  right: Platform.OS === 'ios' ? 20 : 10,
};

export const REGEX = {
  ALPHANUMERIC_16: {
    regex: '^([a-zA-Z0-9_\\-.]){1,16}$',
    valFailureMsg: 'Please enter an alphanumeric string up to 16 characters',
  },
  ALPHANUMERIC_35: {
    regex: '^([a-z A-Z0-9_\\-.]){1,35}$',
    valFailureMsg: 'Please enter an alphanumeric string up to 35 characters',
  },
  ALPHANUMERIC_50: {
    regex: '^([a-zA-Z0-9_\\-.]){1,50}$',
    valFailureMsg: 'Please enter an alphanumeric string up to 50 characters',
  },
  ALPHANUMERIC_65: {
    regex: '^([a-z A-Z0-9_\\-.]){1,65}$',
    valFailureMsg: 'Please enter an alphanumeric string up to 65 characters',
  },
  INT_PHONE: {
    regex: '^([0-9]){8,20}$',
    valFailureMsg: 'Please enter an International Format Phone Number',
  },
  EMAIL: {
    regex:
      "^(?:[a-zA-Z0-9!#$%&''*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&''*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$",
    valFailureMsg: 'Please enter an valid Email Address',
  },
  PASSWORD: {
    regex: '^(?=.*\\d)(?=.*[A-Z])(?=.*[!@#\\$]).{6,20}$',
    valFailureMsg: 'High Stregth Password 6 to 20 Characters',
  },
};
