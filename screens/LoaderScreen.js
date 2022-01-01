import React from 'react';
import * as Leveyou$appApi from '../apis/Leveyou$appApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ScreenContainer } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const LoaderScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer style={styles.screen} hasSafeArea={true}>
      <View pointerEvents={'auto'}>
        <Leveyou$appApi.FetchLoaderAppGET
          postalCode={parseInt(Constants['postalCode'], 10)}
        >
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return null;
          }}
        </Leveyou$appApi.FetchLoaderAppGET>
      </View>
      <Modal animationType={'slide'} presentationStyle={'fullScreen'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  FetchLp: {
    minHeight: 40,
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoaderScreen;
