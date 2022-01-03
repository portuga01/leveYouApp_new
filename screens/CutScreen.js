import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  Container,
  Icon,
  ProgressBar,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const CutScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.strong }]}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={[styles.Views0, { borderColor: theme.colors.strong }]}>
        <View style={[styles.ViewxQ, { borderRadius: theme.roundness }]}>
          <Container
            style={styles.ContainerrW}
            backgroundImageResizeMode={'cover'}
            backgroundImage={Images.Gradient}
          >
            <View style={styles.ViewtI}>
              <ProgressBar
                style={styles.ProgressBarHj}
                progress={1}
                borderRadius={0}
                borderWidth={0}
                animationType={'timing'}
                color={theme.colors.lightInverse}
                unfilledColor={theme.colors.light}
              />
              <ProgressBar
                style={styles.ProgressBar_59}
                progress={1}
                borderRadius={0}
                borderWidth={0}
                animationType={'spring'}
                color={theme.colors.lightInverse}
                unfilledColor={theme.colors.light}
              />
              <ProgressBar
                style={styles.ProgressBarC2}
                progress={0.5}
                borderRadius={0}
                borderWidth={0}
                animationType={'timing'}
                color={theme.colors.lightInverse}
                unfilledColor={theme.colors.light}
              />
            </View>

            <View style={styles.Viewl7}>
              <View
                style={[
                  styles.ViewHT,
                  { borderRadius: 60, borderColor: theme.colors.light },
                ]}
                pointerEvents={'auto'}
              >
                <CircleImage
                  source={{
                    uri: 'https://static.draftbit.com/images/placeholder-image.png',
                  }}
                  size={60}
                />
              </View>

              <View style={styles.Viewkr}>
                <Touchable hitSlop={{ left: 8, bottom: 8, right: 8, top: 8 }}>
                  <Icon
                    color={theme.colors.lightInverse}
                    size={24}
                    name={'MaterialIcons/close'}
                  />
                </Touchable>
              </View>
            </View>
            <View style={styles.ViewMR} removeClippedSubviews={false} />
          </Container>
        </View>

        <View
          style={[styles.View_0a, { backgroundColor: theme.colors.strong }]}
        >
          <Touchable style={styles.TouchableWM}>
            <View style={styles.Viewy4}>
              <View
                style={[
                  styles.Viewrz,
                  {
                    backgroundColor: theme.colors.background,
                    borderRadius: theme.roundness,
                  },
                ]}
              >
                <Icon
                  color={theme.colors.strong}
                  size={16}
                  name={'Entypo/share-alternative'}
                />
              </View>

              <Text
                style={[
                  theme.typography.body2,
                  styles.TextUe,
                  { color: theme.colors.background },
                ]}
              >
                {'Compartilhar este cut'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ProgressBarHj: {
    height: 2,
    marginRight: 2,
    marginLeft: 2,
    width: '32%',
  },
  ProgressBar_59: {
    height: 2,
    marginRight: 2,
    marginLeft: 2,
    width: '32%',
  },
  ProgressBarC2: {
    height: 2,
    marginRight: 2,
    marginLeft: 2,
    width: '32%',
  },
  ViewtI: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  ViewHT: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  Viewkr: {
    flexDirection: 'row',
  },
  Viewl7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    marginRight: 24,
    marginLeft: 24,
  },
  ViewMR: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    marginLeft: 16,
    marginRight: 16,
    flexWrap: 'wrap',
    alignContent: 'center',
    flex: 1,
  },
  ContainerrW: {
    height: '100%',
  },
  ViewxQ: {
    width: '100%',
    alignSelf: 'stretch',
    overflow: 'hidden',
    flex: 1,
    height: '80%',
  },
  Viewrz: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
  },
  TextUe: {
    marginLeft: 16,
  },
  Viewy4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableWM: {
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_0a: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 32,
  },
  Views0: {
    width: '100%',
    position: 'absolute',
    flex: 1,
    height: '100%',
  },
  screen: {
    flex: 1,
  },
});

export default withTheme(CutScreen);
