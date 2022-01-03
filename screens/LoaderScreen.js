import React from 'react';
import * as Leveyou$appApi from '../apis/Leveyou$appApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const LoaderScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  // Obter data atual do client
  const getDateNow = () => {
    const date = new Date();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();
    const year = date.getFullYear().toString();
    return parseInt(month + day + year); //date today
  };
  const {
    loading: screenLoading,
    data: screenData,
    error: screenError,
  } = Leveyou$appApi.useLoaderAppGET();
  React.useEffect(() => {
    try {
      setGlobalVariableValue({
        key: 'configFileJson',
        value: screenData,
      });
      setGlobalVariableValue({
        key: 'lastUpdateConfigFiles',
        value: getDateNow(),
      });
      navigation.navigate('BottomTabNavigator');
    } catch (err) {
      console.error(err);
    }
  }, [screenData]);

  if (screenLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (screenError) {
    return null;
  }

  if (!screenData) {
    return null;
  }

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <View style={styles.Viewi7} pointerEvents={'auto'}>
        <Image
          style={styles.ImagehA}
          source={Images.HeaderIcon}
          resizeMode={'cover'}
        />
        <ActivityIndicator
          style={styles.ActivityIndicatorvJ}
          size={'small'}
          animating={true}
          hidesWhenStopped={true}
          color={theme.colors.secondary}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagehA: {
    width: 130,
    height: 40,
  },
  ActivityIndicatorvJ: {
    width: 36,
    height: 36,
  },
  Viewi7: {
    alignItems: 'center',
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(LoaderScreen);
