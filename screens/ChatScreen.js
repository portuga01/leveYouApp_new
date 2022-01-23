import React from 'react';
import * as Leveyou$appApi from '../apis/Leveyou$appApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  AudioPlayer,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ChatScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const sendMessage = () => {
    //type: text||image||song
    //content: content of message. Get from hooks
    //and for last push message in user chat
  };

  const { theme } = props;
  const { navigation } = props;

  const authUserPOST = Leveyou$appApi.useAuthUserPOST();
  const {
    loading: screenLoading,
    data: screenData,
    error: screenError,
  } = Leveyou$appApi.useGetTermsGET();

  const [textInputValue, setTextInputValue] = React.useState('');
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

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Touchable style={styles.TouchableMn}>
        <Surface style={styles.Surface_2A} elevation={3}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles.ViewpW} pointerEvents={'auto'}>
              <Icon
                name={'Feather/chevron-left'}
                size={24}
                color={theme.colors.primary}
              />
              <Text style={[styles.Text_7h, { color: theme.colors.primary }]}>
                {'voltar'}
              </Text>
            </View>
          </Touchable>

          <View
            style={[
              styles.ViewIt,
              {
                backgroundColor: theme.colors.divider,
                borderColor: theme.colors.light,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Image
              style={[styles.Image_1n, { borderRadius: theme.roundness }]}
              source={{
                uri: `${props.route?.params?.conversationImage ?? ''}`,
              }}
              resizeMode={'cover'}
            />
          </View>

          <View style={styles.ViewaG} pointerEvents={'auto'}>
            <View style={styles.ViewDm} pointerEvents={'auto'}>
              <Text
                style={[styles.Textia, { color: theme.colors.medium }]}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >
                {props.route?.params?.conversationTitle ?? ''}
              </Text>
              <Icon
                style={styles.IconXf}
                name={'Feather/user-check'}
                size={17}
                color={theme.colors.medium}
              />
            </View>

            <Text style={{ color: theme.colors.medium }}>{'Ver mais'}</Text>
          </View>

          <View style={styles.ViewQK} pointerEvents={'auto'}>
            <Icon name={'Feather/chevron-down'} size={24} />
          </View>
        </Surface>
      </Touchable>

      <View style={styles.ViewyF} pointerEvents={'auto'}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <FlatList
            data={screenData}
            renderItem={({ item }) => {
              const listData = item;
              return (
                <>
                  <View
                    style={[
                      styles.Viewk9,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 8,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.Text_2n, { color: theme.colors.medium }]}
                      numberOfLines={1}
                      ellipsizeMode={'tail'}
                    >
                      {'title of remetent'}
                    </Text>

                    <Text
                      style={{ color: theme.colors.strong }}
                      ellipsizeMode={'tail'}
                    >
                      {listData?.content}
                    </Text>

                    <Text
                      style={[styles.Textmu, { color: theme.colors.strong }]}
                      numberOfLines={1}
                      ellipsizeMode={'clip'}
                    >
                      {'Qua, 21 Jan 22 às 14:45'}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.View_4W,
                      {
                        backgroundColor: theme.colors.custom_rgb69_255_79,
                        borderRadius: 8,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.Textbz, { color: theme.colors.medium }]}
                      numberOfLines={1}
                      ellipsizeMode={'tail'}
                    >
                      {'title of remetent'}
                    </Text>

                    <Text
                      style={{ color: theme.colors.strong }}
                      ellipsizeMode={'tail'}
                    >
                      {listData?.content}
                    </Text>

                    <Text
                      style={[styles.TextDW, { color: theme.colors.strong }]}
                      numberOfLines={1}
                      ellipsizeMode={'clip'}
                    >
                      {'Qua, 21 Jan 22 às 14:45'}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.Viewzr,
                      {
                        backgroundColor: theme.colors.custom_rgb69_255_79,
                        borderRadius: 8,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Image
                      style={styles.ImageP4}
                      source={{
                        uri: 'https://rondoniaja.com/wp-content/uploads/2021/10/Meme-de-Zuckerberg.jpg',
                      }}
                      resizeMode={'cover'}
                    />
                    <Text
                      style={[styles.TextyY, { color: theme.colors.strong }]}
                      numberOfLines={1}
                      ellipsizeMode={'clip'}
                    >
                      {'Qua, 21 Jan 22 às 14:45'}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.ViewLT,
                      {
                        backgroundColor: theme.colors.custom_rgb69_255_79,
                        borderRadius: 8,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <AudioPlayer
                      source={{
                        uri: 'https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3',
                      }}
                    />
                    <Text
                      style={[styles.Textaw, { color: theme.colors.strong }]}
                      numberOfLines={1}
                      ellipsizeMode={'clip'}
                    >
                      {'Qua, 21 Jan 22 às 14:45'}
                    </Text>
                  </View>
                </>
              );
            }}
            contentContainerStyle={styles.FlatListX8Content}
            numColumns={1}
          />
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewJ2}
        enabled={true}
        behavior={'position'}
        keyboardVerticalOffset={85}
      >
        <View
          style={[
            styles.Viewu4,
            {
              borderColor: theme.colors.light,
              backgroundColor: theme.colors.background,
            },
          ]}
          pointerEvents={'auto'}
        >
          <View style={styles.Viewep} pointerEvents={'auto'}>
            <IconButton
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'actionSheetChat',
                    value: true,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'Feather/image'}
              size={32}
              color={theme.colors.medium}
            />
            <IconButton
              icon={'Feather/mic'}
              size={32}
              color={theme.colors.medium}
            />
            <TextInput
              onChangeText={textInputValue => {
                try {
                  setTextInputValue(textInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputeB,
                { borderColor: theme.colors.divider },
              ]}
              value={textInputValue}
              placeholder={'Escreva uma mensagem'}
              multiline={true}
              numberOfLines={1}
              maxLength={255}
              keyboardAppearance={'default'}
              keyboardType={'default'}
              placeholderTextColor={theme.colors.medium}
            />
            <IconButton
              onPress={() => {
                try {
                  sendMessage();
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'Feather/arrow-right-circle'}
              size={32}
              color={theme.colors.medium}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      <ActionSheet visible={Constants['actionSheetChat']}>
        <ActionSheetItem
          onPress={async () => {
            try {
              const imageCameraToSend = await Utils.openCamera({
                allowsEditing: true,
                quality: 0.54,
              });
              const responseImageCamera = await authUserPOST.mutateAsync({
                phone: 'testeçlflsf',
              });
              setGlobalVariableValue({
                key: 'actionSheetChat',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemI4}
          label={'Tirar foto'}
          color={theme.colors.strong}
        />
        <ActionSheetItem
          onPress={async () => {
            try {
              const imagePickerToSend = await Utils.openImagePicker({
                allowsEditing: true,
                quality: 0.54,
              });
              const responseImagePicker = await authUserPOST.mutateAsync({
                phone: 'teste',
              });
              setGlobalVariableValue({
                key: 'actionSheetChat',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemBL}
          label={'Escolher da galeria'}
          color={theme.colors.strong}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'actionSheetChat',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_7h: {
    fontSize: 16,
  },
  ViewpW: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
  },
  Image_1n: {
    minWidth: 48,
    maxWidth: 48,
    minHeight: 48,
    maxHeight: 48,
  },
  ViewIt: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
    marginLeft: 15,
  },
  Textia: {
    fontSize: 17,
  },
  IconXf: {
    marginLeft: 5,
  },
  ViewDm: {
    flexDirection: 'row',
  },
  ViewaG: {
    width: '50%',
  },
  ViewQK: {
    justifyContent: 'center',
  },
  Surface_2A: {
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  TouchableMn: {
    maxHeight: 60,
  },
  Text_2n: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  Textmu: {
    fontFamily: 'System',
    fontWeight: '200',
    textAlign: 'right',
  },
  Viewk9: {
    paddingRight: '5%',
    paddingLeft: '3%',
    marginBottom: 10,
    marginLeft: '2%',
    marginRight: '25%',
  },
  Textbz: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  TextDW: {
    fontFamily: 'System',
    fontWeight: '200',
    textAlign: 'right',
  },
  View_4W: {
    paddingRight: '3%',
    paddingLeft: '4%',
    marginBottom: 10,
    marginLeft: '25%',
    marginRight: '2%',
  },
  ImageP4: {
    width: 250,
    height: 250,
    maxWidth: 250,
    maxHeight: 250,
  },
  TextyY: {
    fontFamily: 'System',
    fontWeight: '200',
    textAlign: 'right',
  },
  Viewzr: {
    paddingRight: '3%',
    paddingLeft: '4%',
    marginBottom: 10,
    marginLeft: '25%',
    marginRight: '2%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Textaw: {
    fontFamily: 'System',
    fontWeight: '200',
    textAlign: 'right',
  },
  ViewLT: {
    paddingRight: '3%',
    paddingLeft: '4%',
    marginBottom: 10,
    marginLeft: '25%',
    marginRight: '2%',
    paddingTop: 10,
  },
  FlatListX8Content: {
    flex: 1,
  },
  ViewyF: {
    paddingBottom: 80,
    paddingTop: 2,
  },
  TextInputeB: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    width: '65%',
  },
  Viewep: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Viewu4: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 1,
    height: 50,
  },
  KeyboardAvoidingViewJ2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  ActionSheetItemI4: {
    textAlign: 'center',
  },
  ActionSheetItemBL: {
    textAlign: 'center',
  },
});

export default withTheme(ChatScreen);
