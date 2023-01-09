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
