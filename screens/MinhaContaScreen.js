import React from 'react';
import { ScreenContainer } from '@draftbit/ui';

const MinhaContaScreen = props => {
  const [imageUrlData, setImageUrlData] = React.useState('');
  const [openImageSelect, setOpenImageSelect] = React.useState('');
  const [uploadingImage, setUploadingImage] = React.useState('');

  return <ScreenContainer hasSafeArea={true} scrollable={true} />;
};

export default MinhaContaScreen;
