import React from 'react';
import * as Utils from '../utils';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  CircleImage,
  Divider,
  Icon,
  Link,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const MinhaContaCopyScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View
        style={[
          styles.ViewxB,
          {
            backgroundColor: theme.colors.secondary,
            borderRadius: 6,
            borderColor: theme.colors.divider,
          },
        ]}
        pointerEvents={'auto'}
      />
      <View style={styles.ViewRn} pointerEvents={'auto'}>
        <Text
          style={[styles.TextKV, { color: theme.colors.background }]}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        >
          {'Minha conta'}
        </Text>
        <Icon
          name={'MaterialIcons/help-center'}
          color={theme.colors.background}
          size={30}
        />
      </View>

      <Surface style={[styles.SurfaceG4, { borderRadius: 6 }]} elevation={3}>
        <View style={styles.Viewx7} pointerEvents={'auto'}>
          <Touchable
            onPress={() => {
              try {
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TouchablelJ,
              { borderRadius: 50, borderColor: theme.colors.light },
            ]}
          >
            <>
              {!!null ? null : (
                <CircleImage source={{ uri: `${null}` }} size={70} />
              )}
            </>
            <>
              {!null ? null : (
                <View style={styles.ViewPH} pointerEvents={'auto'}>
                  <ActivityIndicator
                    style={styles.ActivityIndicatorO4}
                    size={'small'}
                    animating={true}
                    hidesWhenStopped={true}
                    color={theme.colors.medium}
                  />
                </View>
              )}
            </>
          </Touchable>

          <View
            style={[
              styles.View_26,
              { backgroundColor: theme.colors.strongInverse, borderRadius: 6 },
            ]}
            pointerEvents={'auto'}
          >
            <Icon
              name={'MaterialIcons/edit'}
              color={theme.colors.medium}
              size={15}
            />
          </View>
        </View>

        <View style={styles.Viewmc} pointerEvents={'auto'}>
          <Text
            style={[styles.Text_84, { color: theme.colors.medium }]}
            ellipsizeMode={'tail'}
            numberOfLines={1}
          >
            {'Lucas portugal araujo'}
          </Text>

          <View style={styles.Viewf2} pointerEvents={'auto'}>
            <Link
              style={[styles.Link_57, { color: theme.colors.error }]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              title={'Ver perfil completo'}
            />
          </View>
        </View>
      </Surface>
      <Surface style={[styles.SurfaceuR, { borderRadius: 6 }]} elevation={3} />
      <Touchable>
        <View style={styles.ViewXd} pointerEvents={'auto'}>
          <Icon
            name={'MaterialIcons/security'}
            color={theme.colors.medium}
            size={35}
          />
          <View style={styles.ViewZQ} pointerEvents={'auto'}>
            <Text
              style={[styles.Textjo, { color: theme.colors.medium }]}
              ellipsizeMode={'tail'}
              numberOfLines={1}
            >
              {'Segurança e privacidade'}
            </Text>

            <Text
              style={[styles.Textgw, { color: theme.colors.medium }]}
              ellipsizeMode={'tail'}
              numberOfLines={1}
            >
              {'Verificações, senhas e mais'}
            </Text>
          </View>
          <Icon
            style={styles.Iconny}
            name={'MaterialIcons/navigate-next'}
            color={theme.colors.medium}
            size={50}
          />
        </View>
        <Divider style={styles.DividerzQ} color={theme.colors.divider} />
      </Touchable>

      <ActionSheet visible={null}>
        <ActionSheetItem
          onPress={async () => {
            try {
              const imageCamera = await Utils.openCamera({
                mediaTypes: 'Images',
                allowsEditing: true,
                quality: 0.57,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemLi}
          label={'Tirar foto'}
          color={theme.colors.medium}
        />
        <ActionSheetItem
          onPress={async () => {
            try {
              const imagePicker = await Utils.openImagePicker({
                allowsEditing: true,
                quality: 0.58,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemtC}
          label={'Escolher da galeria'}
          color={theme.colors.medium}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
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
  ViewxB: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    borderBottomWidth: 1,
  },
  TextKV: {
    fontSize: 21,
    fontFamily: 'MontserratRegular',
  },
  ViewRn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 6,
  },
  ActivityIndicatorO4: {
    width: 35,
    height: 35,
    marginLeft: 17,
  },
  ViewPH: {
    height: 70,
    justifyContent: 'center',
  },
  TouchablelJ: {
    width: 70,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  View_26: {
    width: 15,
    height: 15,
    position: 'absolute',
    bottom: 0,
    left: 28,
  },
  Viewx7: {
    justifyContent: 'center',
  },
  Text_84: {
    fontFamily: 'MontserratRegular',
    fontSize: 21,
  },
  Link_57: {
    fontFamily: 'MontserratRegular',
    marginTop: 8,
  },
  Viewf2: {
    flexDirection: 'row',
  },
  Viewmc: {
    marginLeft: 16,
  },
  SurfaceG4: {
    minHeight: 40,
    marginLeft: 16,
    marginTop: 8,
    marginRight: 16,
    marginBottom: 8,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    height: 100,
  },
  SurfaceuR: {
    marginLeft: 16,
    marginTop: 8,
    marginRight: 16,
    marginBottom: 16,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    height: 160,
  },
  Textjo: {
    fontFamily: 'MontserratSemiBold',
  },
  Textgw: {
    fontFamily: 'MontserratLight',
  },
  ViewZQ: {
    marginLeft: 16,
  },
  Iconny: {
    marginRight: 0,
  },
  ViewXd: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DividerzQ: {
    height: 1,
  },
  ActionSheetItemLi: {
    textAlign: 'center',
  },
  ActionSheetItemtC: {
    textAlign: 'center',
  },
});

export default withTheme(MinhaContaCopyScreen);
