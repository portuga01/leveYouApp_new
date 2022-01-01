import { systemWeights } from 'react-native-typography';
export default {
  disabledOpacity: 0.5,
  roundness: 6,
  colors: {
    background: 'rgba(251, 252, 253, 1)',
    divider: 'rgba(234, 237, 242, 1)',
    error: 'rgba(255, 69, 100, 1)',
    light: 'rgba(165, 173, 183, 1)',
    lightInverse: 'rgba(255, 255, 255, 0.68)',
    medium: 'rgba(70, 78, 88, 1)',
    mediumInverse: 'rgba(255, 255, 255, 0.87)',
    primary: 'rgba(90, 69, 255, 1)',
    secondary: 'rgba(59, 201, 234, 1)',
    strong: 'rgba(18, 20, 44, 1)',
    strongInverse: 'rgba(255, 255, 255, 1)',
    surface: 'rgba(255, 255, 255, 1)',
    bluebackgorundcards: 'rgb(216, 234, 238)',
    gray__: 'rgb(180, 180, 180)',
    custom_rgb69_255_79: 'rgba(69, 255, 79, 0.71)',
    custom_rgb90_69_255: 'rgb(90, 69, 255)',
    yellowcard: 'rgb(204, 255, 69)',
  },
  typography: {
    body1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    body2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    button: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
    },
    caption: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 16,
    },
    custom14: {
      fontFamily: 'MontserratRegular',
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 16,
    },
    custom15: {
      fontFamily: 'MontserratLight',
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 16,
    },
    custom16: {
      fontFamily: 'MontserratLight',
      fontSize: 11,
      letterSpacing: 1,
      lineHeight: 16,
    },
    custom17: {
      fontFamily: 'MontserratLight',
      fontSize: 17,
      letterSpacing: 1,
      lineHeight: 16,
    },
    custom18: {
      ...systemWeights.thin,
      fontSize: 17,
      letterSpacing: 1,
      lineHeight: 16,
    },
    headline1: {
      ...systemWeights.bold,
      fontSize: 60,
      letterSpacing: 0,
      lineHeight: 71,
    },
    headline2: {
      ...systemWeights.bold,
      fontSize: 48,
      letterSpacing: 0,
      lineHeight: 58,
    },
    headline3: {
      ...systemWeights.bold,
      fontSize: 34,
      letterSpacing: 0,
      lineHeight: 40,
    },
    headline4: {
      ...systemWeights.bold,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 34,
    },
    headline5: {
      ...systemWeights.bold,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
    },
    headline6: {
      ...systemWeights.bold,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    overline: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 16,
    },
    subtitle1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
  },
};