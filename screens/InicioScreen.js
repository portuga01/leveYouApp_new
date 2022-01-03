import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  CircleImage,
  Icon,
  Link,
  ScreenContainer,
  Surface,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const InicioScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  // Verificar se o banner verde de campanha está ativo para este CEP
  const bannerTopIsActive = configFileJson => {
    try {
      //return configFileJson.campaign.active;
      return true;
    } catch (e) {
      return false;
    }
  };

  const [tabView1, setTabView1] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={true}
      scrollable={true}
    >
      <>
        {!bannerTopIsActive(Constants['configFileJson']) ? null : (
          <Touchable>
            <View
              style={[
                styles.View_4h,
                { backgroundColor: theme.colors.yellowcard },
              ]}
              pointerEvents={'auto'}
            >
              <Text
                style={[styles.TextpP, { color: theme.colors.strong }]}
                ellipsizeMode={'tail'}
                numberOfLines={1}
              >
                {'{Constants["configFileJson"].campaign.name}'}
              </Text>

              <Text
                style={[styles.TextBA, { color: theme.colors.strong }]}
                ellipsizeMode={'tail'}
                numberOfLines={2}
              >
                {null}
              </Text>
            </View>
          </Touchable>
        )}
      </>
      <View style={styles.ViewZb}>
        <Image
          style={styles.ImageYr}
          resizeMode={'contain'}
          source={Images.HeaderIcon}
        />
      </View>

      <View style={styles.ViewrS} collapsable={true}>
        <Touchable>
          <Surface
            style={[styles.SurfacekG, { borderRadius: 10 }]}
            elevation={3}
          >
            <View style={styles.Viewwa} pointerEvents={'auto'}>
              <Icon
                name={'MaterialIcons/search'}
                color={theme.colors.strong}
                size={30}
              />
              <Text
                style={[styles.TextSq, { color: theme.colors.strong }]}
                ellipsizeMode={'tail'}
                numberOfLines={1}
              >
                {'Buscar produtos, lojas...'}
              </Text>
            </View>
          </Surface>
        </Touchable>
      </View>

      <View style={styles.ViewR7} pointerEvents={'auto'}>
        <View pointerEvents={'auto'}>
          <Link
            style={[styles.LinkIB, { color: theme.colors.medium }]}
            title={'Doações'}
            ellipsizeMode={'tail'}
            numberOfLines={1}
          />
          <>
            {!false ? null : (
              <View
                style={[
                  styles.View_9R,
                  { backgroundColor: theme.colors.secondary },
                ]}
                pointerEvents={'auto'}
              />
            )}
          </>
        </View>

        <View pointerEvents={'auto'}>
          <Link
            style={[styles.LinkSj, { color: theme.colors.medium }]}
            title={'Para elas'}
          />
          <>
            {!false ? null : (
              <View
                style={[
                  styles.ViewDp,
                  { backgroundColor: theme.colors.secondary },
                ]}
                pointerEvents={'auto'}
              />
            )}
          </>
        </View>

        <View pointerEvents={'auto'}>
          <Link
            style={[styles.LinkfO, { color: theme.colors.medium }]}
            title={'Para eles'}
          />
          <>
            {!false ? null : (
              <View
                style={[
                  styles.ViewDL,
                  { backgroundColor: theme.colors.secondary },
                ]}
                pointerEvents={'auto'}
              />
            )}
          </>
        </View>

        <View pointerEvents={'auto'}>
          <Link
            style={[styles.LinkDE, { color: theme.colors.medium }]}
            title={'Tudo&mais'}
          />
          <>
            {!false ? null : (
              <View
                style={[
                  styles.View_3E,
                  { backgroundColor: theme.colors.secondary },
                ]}
                pointerEvents={'auto'}
              />
            )}
          </>
        </View>
      </View>

      <View style={styles.Viewal} pointerEvents={'auto'}>
        <DraftbitExampleDataApi.FetchGET10MostRecentArticles17421GET>
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

            return (
              <FlatList
                data={fetchData}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable>
                      <View
                        style={[styles.View_5e, { borderRadius: 10 }]}
                        pointerEvents={'auto'}
                      >
                        <CircleImage
                          style={styles.CircleImageat}
                          source={{
                            uri: 'https://static.draftbit.com/images/placeholder-image.png',
                          }}
                          size={70}
                        />
                        <Text
                          style={[
                            styles.TextXq,
                            { color: theme.colors.strong },
                          ]}
                          ellipsizeMode={'clip'}
                          numberOfLines={1}
                        >
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>
                  );
                }}
                contentContainerStyle={styles.FlatListfaContent}
                numColumns={1}
                horizontal={true}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchGET10MostRecentArticles17421GET>
      </View>

      <View style={styles.ViewOe} pointerEvents={'auto'}>
        <Swiper
          style={styles.SwiperEW}
          dotsTouchable={false}
          loop={true}
          from={0}
          vertical={false}
          timeout={4}
        >
          <SwiperItem style={[styles.SwiperItemuU, { borderRadius: 8 }]}>
            <Touchable
              onPress={() => {
                try {
                  console.log('clicked');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                style={[styles.Imageq1, { borderRadius: theme.roundness }]}
                source={{ uri: `${Constants['lastUpdateConfigFiles']}` }}
                resizeMode={'cover'}
              />
            </Touchable>
          </SwiperItem>

          <SwiperItem style={[styles.SwiperItemY0, { borderRadius: 8 }]}>
            <Touchable
              onPress={() => {
                try {
                  console.log('clicked');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                style={[styles.ImageLg, { borderRadius: theme.roundness }]}
                source={{
                  uri: 'https://source.unsplash.com/random/1200x800?tech',
                }}
                resizeMode={'cover'}
              />
            </Touchable>
          </SwiperItem>
        </Swiper>
      </View>

      <View style={styles.ViewzE} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              setTabView1(false);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Text style={[styles.Textby, { color: theme.colors.medium }]}>
            {'Em alta'}
          </Text>
          <>
            {!!tabView1 ? null : (
              <View
                style={[
                  styles.Viewni,
                  { backgroundColor: theme.colors.secondary },
                ]}
                pointerEvents={'auto'}
              />
            )}
          </>
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              setTabView1(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.TouchablexG}
        >
          <Text style={[styles.TextIn, { color: theme.colors.medium }]}>
            {'Sugeridos pelo leveYou'}
          </Text>
          <>
            {!tabView1 ? null : (
              <View
                style={[
                  styles.ViewWV,
                  { backgroundColor: theme.colors.secondary },
                ]}
                pointerEvents={'auto'}
              />
            )}
          </>
        </Touchable>
        <View
          style={[styles.ViewZ7, { backgroundColor: theme.colors.light }]}
          pointerEvents={'auto'}
        />
      </View>
      <>
        {!!tabView1 ? null : (
          <View pointerEvents={'auto'}>
            <View style={styles.ViewbR} pointerEvents={'auto'}>
              <View style={styles.ViewO8} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Viewsz,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageQs, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.Textnz, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextJT, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewfT} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Viewlp,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageNb, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.TextgJ, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextDs, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>
            </View>
            <ButtonSolid
              style={[
                styles.ButtonSolidFZ,
                { backgroundColor: theme.colors.secondary },
              ]}
              title={'Ver mais produtos em alta'}
            />
          </View>
        )}
      </>
      <>
        {!tabView1 ? null : (
          <View pointerEvents={'auto'}>
            <View style={styles.View_82} pointerEvents={'auto'}>
              <View style={styles.View_7W} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.View_4m,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageCm, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.Textam, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text
                    style={[styles.Text_7L, { color: theme.colors.medium }]}
                  >
                    {'teste2'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewXx} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Viewbe,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Imageks, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.Textjr, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text
                    style={[styles.Text_5N, { color: theme.colors.medium }]}
                  >
                    {'teste2'}
                  </Text>
                </View>
              </View>
            </View>
            <ButtonSolid
              style={[
                styles.ButtonSoliddJ,
                { backgroundColor: theme.colors.secondary },
              ]}
              title={'Ver mais sugeridos pela leveYou'}
            />
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextpP: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextBA: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 15,
  },
  View_4h: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ImageYr: {
    height: 50,
    width: 150,
  },
  ViewZb: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    maxHeight: 56,
    marginTop: 33,
  },
  TextSq: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 15,
    alignSelf: 'center',
  },
  Viewwa: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginRight: 10,
  },
  SurfacekG: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  ViewrS: {
    marginTop: 33,
    marginLeft: '5%',
    marginRight: '5%',
  },
  LinkIB: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 14,
  },
  View_9R: {
    height: 1,
  },
  LinkSj: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  ViewDp: {
    height: 1,
  },
  LinkfO: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  ViewDL: {
    height: 1,
  },
  LinkDE: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  View_3E: {
    height: 1,
  },
  ViewR7: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft: '5%',
    marginRight: '5%',
  },
  CircleImageat: {
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  TextXq: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  View_5e: {
    width: 80,
    marginRight: 10,
    alignItems: 'center',
  },
  FlatListfaContent: {
    flex: 1,
  },
  Fetchs9: {
    minHeight: 40,
  },
  Viewal: {
    marginTop: 28,
    marginLeft: 14,
    marginRight: 14,
  },
  Imageq1: {
    width: '100%',
    height: 190,
  },
  SwiperItemuU: {
    marginBottom: 6,
  },
  ImageLg: {
    width: '100%',
    height: 190,
  },
  SwiperItemY0: {
    marginBottom: 6,
  },
  SwiperEW: {
    width: '100%',
    paddingRight: 5,
    paddingLeft: 5,
    height: 200,
  },
  ViewOe: {
    marginBottom: 8,
    marginTop: 25,
  },
  Textby: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 17,
  },
  Viewni: {
    height: 2,
  },
  TextIn: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 17,
  },
  ViewWV: {
    height: 2,
  },
  TouchablexG: {
    marginLeft: 10,
  },
  ViewZ7: {
    height: 2,
  },
  ViewzE: {
    width: '70%',
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 7,
  },
  ImageQs: {
    height: 180,
    width: '100%',
  },
  Textnz: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextJT: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  Viewsz: {
    marginRight: 20,
    height: 180,
    width: '100%',
  },
  ViewO8: {
    marginRight: '1%',
    width: '49%',
  },
  ImageNb: {
    width: '100%',
    height: 180,
  },
  TextgJ: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextDs: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  Viewlp: {
    height: 180,
    width: '100%',
  },
  ViewfT: {
    marginLeft: '1%',
    width: '49%',
  },
  ViewbR: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  ButtonSolidFZ: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  ImageCm: {
    height: 180,
    width: '100%',
  },
  Textam: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  Text_7L: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  View_4m: {
    marginRight: 20,
    height: 180,
    width: '100%',
  },
  View_7W: {
    marginRight: '1%',
    width: '49%',
  },
  Imageks: {
    width: '100%',
    height: 180,
  },
  Textjr: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  Text_5N: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  Viewbe: {
    height: 180,
    width: '100%',
  },
  ViewXx: {
    marginLeft: '1%',
    width: '49%',
  },
  View_82: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  ButtonSoliddJ: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default withTheme(InicioScreen);
