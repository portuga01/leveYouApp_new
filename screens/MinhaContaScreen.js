import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  CircleImage,
  Icon,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const MinhaContaScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const [imageUrlData, setImageUrlData] = React.useState('');
  const [openImageSelect, setOpenImageSelect] = React.useState('');
  const [uploadingImage, setUploadingImage] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View
        style={[
          styles.View_8o,
          {
            backgroundColor: theme.colors.strongInverse,
            borderColor: theme.colors.divider,
          },
        ]}
        pointerEvents={'auto'}
      >
        <View style={styles.ViewCZ} pointerEvents={'auto'}>
          <>
            {!!uploadingImage ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setOpenImageSelect(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={{ borderRadius: 50 }}
              >
                <CircleImage
                  source={{
                    uri: 'https://static.draftbit.com/images/placeholder-image.png',
                  }}
                  size={60}
                />
              </Touchable>
            )}
          </>
          <>
            {!uploadingImage ? null : (
              <ActivityIndicator
                style={styles.ActivityIndicatorWD}
                size={'small'}
                animating={true}
                hidesWhenStopped={true}
                color={theme.colors.secondary}
              />
            )}
          </>
        </View>

        <View style={styles.View_3N} pointerEvents={'auto'}>
          <Text
            style={[styles.TextuA, { color: theme.colors.medium }]}
            ellipsizeMode={'tail'}
            numberOfLines={1}
          >
            {null}
            {' fgh'}
          </Text>
          <Link style={{ color: theme.colors.primary }} title={'Meus dados'} />
        </View>

        <View style={styles.Viewpv} pointerEvents={'auto'}>
          <Text
            style={[styles.TextWe, { color: theme.colors.medium }]}
            ellipsizeMode={'tail'}
            numberOfLines={1}
          >
            {'Olá visitante'}
          </Text>
          <Link
            style={{ color: theme.colors.primary }}
            title={'Autenticar-me'}
          />
        </View>
      </View>

      <ActionSheet>
        <ActionSheetItem
          onPress={async () => {
            try {
              setOpenImageSelect(false);
              const responseCamera = await Utils.openCamera({
                mediaTypes: 'Images',
                allowsEditing: true,
                quality: 0.52,
              });
              await DraftbitExampleDataApi.gET10MostRecentArticles17421GET(
                Constants
              );
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemgy}
          label={'Option'}
        />
        <ActionSheetItem
          onPress={async () => {
            try {
              setOpenImageSelect(false);
              const responseImagePicker = await Utils.openImagePicker({
                mediaTypes: 'Images',
                allowsEditing: true,
                quality: 0.49,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItem_7g}
          label={'Option'}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setOpenImageSelect(false);
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
        />
      </ActionSheet>

      <Touchable style={styles.TouchableYf}>
        <View style={styles.ViewFM} pointerEvents={'auto'}>
          <View pointerEvents={'auto'}>
            <Text
              style={[styles.Text_0z, { color: theme.colors.medium }]}
              ellipsizeMode={'tail'}
              numberOfLines={1}
            >
              {'Segurança, LGPD e privacidade'}
            </Text>
          </View>

          <View pointerEvents={'auto'}>
            <Icon
              name={'MaterialIcons/navigate-next'}
              color={theme.colors.medium}
              size={24}
            />
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.TouchablepZ}>
        <View style={styles.View_2Z} pointerEvents={'auto'}>
          <View pointerEvents={'auto'}>
            <Text
              style={[styles.TextkI, { color: theme.colors.medium }]}
              ellipsizeMode={'tail'}
              numberOfLines={1}
            >
              {'Notificações, notificações PUSH'}
            </Text>
          </View>

          <View pointerEvents={'auto'}>
            <Icon
              name={'MaterialIcons/navigate-next'}
              color={theme.colors.medium}
              size={24}
            />
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.TouchableDX}>
        <View style={styles.Viewef} pointerEvents={'auto'}>
          <View pointerEvents={'auto'}>
            <Text
              style={[styles.TextxF, { color: theme.colors.medium }]}
              ellipsizeMode={'tail'}
              numberOfLines={1}
            >
              {'Categorias e preferências'}
            </Text>
          </View>

          <View pointerEvents={'auto'}>
            <Icon
              name={'MaterialIcons/navigate-next'}
              color={theme.colors.medium}
              size={24}
            />
          </View>
        </View>
      </Touchable>

      <Touchable style={styles.Touchableh5}>
        <Text
          style={[styles.TextC8, { color: theme.colors.error }]}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        >
          {'Sair'}
        </Text>
      </Touchable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ActivityIndicatorWD: {
    width: 36,
    height: 36,
  },
  ViewCZ: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  TextuA: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 17,
  },
  View_3N: {
    marginLeft: 20,
  },
  TextWe: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 17,
  },
  Viewpv: {
    marginLeft: 20,
  },
  View_8o: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  ActionSheetItemgy: {
    textAlign: 'center',
  },
  ActionSheetItem_7g: {
    textAlign: 'center',
  },
  Text_0z: {
    fontSize: 15,
  },
  ViewFM: {
    flexDirection: 'row',
  },
  TouchableYf: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  TextkI: {
    fontSize: 15,
  },
  View_2Z: {
    flexDirection: 'row',
  },
  TouchablepZ: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  TextxF: {
    fontSize: 15,
  },
  Viewef: {
    flexDirection: 'row',
  },
  TouchableDX: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  TextC8: {
    fontSize: 16,
    textAlign: 'right',
  },
  Touchableh5: {
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
    marginBottom: 30,
  },
});

export default withTheme(MinhaContaScreen);
