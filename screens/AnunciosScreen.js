import React from 'react';
import { ScreenContainer } from '@draftbit/ui';
import { View } from 'react-native';

const AnunciosScreen = props => {
  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

export default AnunciosScreen;
