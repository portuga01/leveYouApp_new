import React from 'react';
import { Icon, Row, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const AnunciosScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={styles.ViewLs} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon name={'Feather/arrow-left'} size={32} />
        </Touchable>
      </View>

      <View style={styles.ViewuA} pointerEvents={'auto'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        >
          <Row justifyContent={'space-between'} alignItems={'flex-start'}>
            <View style={styles.ViewI4} pointerEvents={'auto'}>
              <View
                style={[styles.View_7j, { borderColor: theme.colors.divider }]}
                pointerEvents={'auto'}
              />
              <View pointerEvents={'auto'} />
            </View>

            <View style={styles.ViewHi} pointerEvents={'auto'}>
              <Image
                style={styles.ImageB0}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
            </View>

            <View style={styles.ViewQG} pointerEvents={'auto'}>
              <Image
                style={styles.ImagewS}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
            </View>
          </Row>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewLs: {
    alignItems: 'flex-start',
  },
  View_7j: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    width: '49%',
    height: '49%',
  },
  ViewI4: {
    width: '36%',
    height: '100%',
  },
  ImageB0: {
    width: 250,
    height: 250,
  },
  ViewHi: {
    width: '36%',
    height: '100%',
  },
  ImagewS: {
    width: 250,
    height: 250,
  },
  ViewQG: {
    width: '36%',
    height: '100%',
  },
  ViewuA: {
    height: '50%',
  },
  screen: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
});

export default withTheme(AnunciosScreen);
