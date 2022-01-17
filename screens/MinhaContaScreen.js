import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const MinhaContaScreen = props => {
  const { theme } = props;

  const [imageUrlData, setImageUrlData] = React.useState('');
  const [openImageSelect, setOpenImageSelect] = React.useState('');
  const [uploadingImage, setUploadingImage] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View pointerEvents={'auto'}>
        <Touchable>
          <Icon
            name={'FontAwesome/photo'}
            color={theme.colors.strong}
            size={24}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MinhaContaScreen);
