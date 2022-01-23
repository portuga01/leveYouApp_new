import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const MyAccountScreen = props => {
  const { theme } = props;

  const [imageUrlData, setImageUrlData] = React.useState('');
  const [openImageSelect, setOpenImageSelect] = React.useState('');
  const [uploadingImage, setUploadingImage] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
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

export default withTheme(MyAccountScreen);
