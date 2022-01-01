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
  const bannerTopIsActive = dataToAnalytics => {
    console.log(dataToAnalytics);
  };

  const calcDiscount = (oldValue, newValue) => {
    return '40%';
  };

  const [tabView1, setTabView1] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={true}
      scrollable={true}
    >
      <Touchable>
        <View
          style={[styles.View_4h, { backgroundColor: theme.colors.yellowcard }]}
          pointerEvents={'auto'}
        >
          <Text
            style={[styles.TextpP, { color: theme.colors.strong }]}
            ellipsizeMode={'tail'}
            numberOfLines={1}
          >
            {'Quer desconto? 👀'}
          </Text>

          <Text
            style={[styles.TextBA, { color: theme.colors.strong }]}
            ellipsizeMode={'tail'}
            numberOfLines={2}
          >
            {'Clique aqui e veja o que selecionamos para você'}
          </Text>
        </View>
      </Touchable>

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
            <View style={styles.View_5p} pointerEvents={'auto'}>
              <Touchable style={styles.Touchable_0r}>
                <View pointerEvents={'auto'}>
                  <View
                    style={[
                      styles.ViewwG,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: theme.roundness,
                      },
                    ]}
                  >
                    <Image
                      style={[
                        styles.ImageBW,
                        { borderRadius: theme.roundness },
                      ]}
                      source={{
                        uri: 'https://source.unsplash.com/random/200x200?motocycle',
                      }}
                      resizeMode={'cover'}
                    />
                    <View
                      style={[
                        styles.ViewgO,
                        {
                          borderRadius: 6,
                          borderColor: theme.colors.light,
                          backgroundColor: theme.colors.strongInverse,
                        },
                      ]}
                      pointerEvents={'auto'}
                    >
                      <Text
                        style={[styles.TextnT, { color: theme.colors.medium }]}
                        ellipsizeMode={'clip'}
                        numberOfLines={1}
                      >
                        {'R$ '}
                        {'179,90'}
                      </Text>

                      <View style={styles.Viewer} pointerEvents={'auto'}>
                        <Icon
                          name={'MaterialIcons/arrow-downward'}
                          color={theme.colors.error}
                          size={19}
                        />
                        <Text
                          style={[styles.TexthS, { color: theme.colors.error }]}
                        >
                          {calcDiscount(149)}
                          {' off'}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <Text
                    style={[styles.Text_7a, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Descrição rápida do produto'}
                  </Text>
                </View>
              </Touchable>
            </View>

            <View style={styles.Viewd3} pointerEvents={'auto'}>
              <View style={styles.ViewDW} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Viewdo,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImagetA, { borderRadius: theme.roundness }]}
                    source={{
                      uri: 'https://source.unsplash.com/random/200x200?car',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={[
                      styles.ViewXX,
                      {
                        borderRadius: 6,
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.strongInverse,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.TextpE, { color: theme.colors.medium }]}
                      ellipsizeMode={'clip'}
                      numberOfLines={1}
                    >
                      {'R$ '}
                      {'179,90'}
                    </Text>

                    <View style={styles.ViewWj} pointerEvents={'auto'}>
                      <Icon
                        name={'MaterialIcons/arrow-downward'}
                        color={theme.colors.error}
                        size={19}
                      />
                      <Text
                        style={[styles.TextWP, { color: theme.colors.error }]}
                      >
                        {'40% off'}
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={[styles.Text_9m, { color: theme.colors.medium }]}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                >
                  {'Descrição rápida do produto'}
                </Text>
              </View>

              <View style={styles.View_5X} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.View_1m,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageRc, { borderRadius: theme.roundness }]}
                    source={{
                      uri: 'https://source.unsplash.com/random/200x200?motocycle',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={[
                      styles.Viewo6,
                      {
                        borderRadius: 6,
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.strongInverse,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.Textke, { color: theme.colors.medium }]}
                      ellipsizeMode={'clip'}
                      numberOfLines={1}
                    >
                      {'R$ '}
                      {'179,90'}
                    </Text>

                    <View style={styles.ViewpF} pointerEvents={'auto'}>
                      <Icon
                        name={'MaterialIcons/arrow-downward'}
                        color={theme.colors.error}
                        size={19}
                      />
                      <Text
                        style={[styles.Texte8, { color: theme.colors.error }]}
                      >
                        {'40% off'}
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={[styles.Textb6, { color: theme.colors.medium }]}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                >
                  {'Descrição rápida do produto'}
                </Text>
              </View>
            </View>

            <View style={styles.ViewXR} pointerEvents={'auto'}>
              <View style={styles.ViewsV} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewKM,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageQ9, { borderRadius: theme.roundness }]}
                    source={{
                      uri: 'https://source.unsplash.com/random/200x200?motocycle',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={[
                      styles.View_6w,
                      {
                        borderRadius: 6,
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.strongInverse,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.TextIJ, { color: theme.colors.medium }]}
                      ellipsizeMode={'clip'}
                      numberOfLines={1}
                    >
                      {'R$ '}
                      {'179,90'}
                    </Text>

                    <View style={styles.Viewil} pointerEvents={'auto'}>
                      <Icon
                        name={'MaterialIcons/arrow-downward'}
                        color={theme.colors.error}
                        size={19}
                      />
                      <Text
                        style={[styles.Textqn, { color: theme.colors.error }]}
                      >
                        {'40% off'}
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={[styles.Textba, { color: theme.colors.medium }]}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                >
                  {'Descrição rápida do produto'}
                </Text>
              </View>

              <View style={styles.ViewkC} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewKN,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Imagern, { borderRadius: theme.roundness }]}
                    source={{
                      uri: 'https://source.unsplash.com/random/200x200?motocycle',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={[
                      styles.ViewuN,
                      {
                        borderRadius: 6,
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.strongInverse,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.TextpZ, { color: theme.colors.medium }]}
                      ellipsizeMode={'clip'}
                      numberOfLines={1}
                    >
                      {'R$ '}
                      {'179,90'}
                    </Text>

                    <View style={styles.ViewFl} pointerEvents={'auto'}>
                      <Icon
                        name={'MaterialIcons/arrow-downward'}
                        color={theme.colors.error}
                        size={19}
                      />
                      <Text
                        style={[styles.TextcU, { color: theme.colors.error }]}
                      >
                        {'40% off'}
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={[styles.TextFU, { color: theme.colors.medium }]}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                >
                  {'Descrição rápida do produto'}
                </Text>
              </View>
            </View>

            <View style={styles.ViewQc} pointerEvents={'auto'}>
              <View style={styles.View_9a} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Viewkv,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageaA, { borderRadius: theme.roundness }]}
                    source={{
                      uri: 'https://source.unsplash.com/random/200x200?motocycle',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={[
                      styles.ViewtW,
                      {
                        borderRadius: 6,
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.strongInverse,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.TextAO, { color: theme.colors.medium }]}
                      ellipsizeMode={'clip'}
                      numberOfLines={1}
                    >
                      {'R$ '}
                      {'179,90'}
                    </Text>

                    <View style={styles.Vieww5} pointerEvents={'auto'}>
                      <Icon
                        name={'MaterialIcons/arrow-downward'}
                        color={theme.colors.error}
                        size={19}
                      />
                      <Text
                        style={[styles.TextID, { color: theme.colors.error }]}
                      >
                        {'40% off'}
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={[styles.TextI9, { color: theme.colors.medium }]}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                >
                  {'Descrição rápida do produto'}
                </Text>
              </View>

              <View style={styles.ViewZd} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.View_0p,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Imageyr, { borderRadius: theme.roundness }]}
                    source={{
                      uri: 'https://source.unsplash.com/random/200x200?motocycle',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={[
                      styles.View_4r,
                      {
                        borderRadius: 6,
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.strongInverse,
                      },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text
                      style={[styles.TextQW, { color: theme.colors.medium }]}
                      ellipsizeMode={'clip'}
                      numberOfLines={1}
                    >
                      {'R$ '}
                      {'179,90'}
                    </Text>

                    <View style={styles.View_1N} pointerEvents={'auto'}>
                      <Icon
                        name={'MaterialIcons/arrow-downward'}
                        color={theme.colors.error}
                        size={19}
                      />
                      <Text
                        style={[styles.Textx4, { color: theme.colors.error }]}
                      >
                        {'40% off'}
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={[styles.TextyL, { color: theme.colors.medium }]}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                >
                  {'Descrição rápida do produto'}
                </Text>
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

            <View style={styles.Viewra} pointerEvents={'auto'}>
              <View style={styles.View_8Y} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewoI,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageyU, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.TextHL, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextE0, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewxV} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewHE,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Imageop, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.TextXy, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextFH, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.Viewed} pointerEvents={'auto'}>
              <View style={styles.ViewZk} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewYv,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImageTg, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.Text_1I, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextK3, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewAA} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewNK,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Imager2, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.TextEm, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.Textmc, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.ViewnW} pointerEvents={'auto'}>
              <View style={styles.ViewaC} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Views0,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Image_9U, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.TextxH, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextWc, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewJ8} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewQm,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.ImagenI, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.Text_3Z, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextoH, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.ViewRu} pointerEvents={'auto'}>
              <View style={styles.ViewYS} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.ViewM2,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Image_5v, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.Textmt, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextKa, { color: theme.colors.medium }]}>
                    {'teste2'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewOa} pointerEvents={'auto'}>
                <View
                  style={[
                    styles.Viewyb,
                    {
                      backgroundColor: theme.colors.divider,
                      borderRadius: theme.roundness,
                    },
                  ]}
                >
                  <Image
                    style={[styles.Imagem0, { borderRadius: theme.roundness }]}
                    source={Images.DraftbitTeamPhoto}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={[styles.TextEG, { color: theme.colors.medium }]}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                  >
                    {'test1'}
                  </Text>

                  <Text style={[styles.TextnQ, { color: theme.colors.medium }]}>
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
  ImageBW: {
    height: 180,
    width: '100%',
  },
  TextnT: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  TexthS: {
    fontSize: 13,
  },
  Viewer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewgO: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  ViewwG: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  Text_7a: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  Touchable_0r: {
    width: '49%',
    marginRight: '1%',
  },
  View_5p: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
  },
  ImagetA: {
    height: 180,
    width: '100%',
  },
  TextpE: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  TextWP: {
    fontSize: 13,
  },
  ViewWj: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewXX: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  Viewdo: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  Text_9m: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  ViewDW: {
    marginRight: '1%',
    width: '49%',
  },
  ImageRc: {
    height: 180,
    width: '100%',
  },
  Textke: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  Texte8: {
    fontSize: 13,
  },
  ViewpF: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewo6: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  View_1m: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  Textb6: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  View_5X: {
    marginRight: '1%',
    width: '49%',
  },
  Viewd3: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  ImageQ9: {
    height: 180,
    width: '100%',
  },
  TextIJ: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  Textqn: {
    fontSize: 13,
  },
  Viewil: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_6w: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  ViewKM: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  Textba: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  ViewsV: {
    marginRight: '1%',
    width: '49%',
  },
  Imagern: {
    height: 180,
    width: '100%',
  },
  TextpZ: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  TextcU: {
    fontSize: 13,
  },
  ViewFl: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewuN: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  ViewKN: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  TextFU: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  ViewkC: {
    marginRight: '1%',
    width: '49%',
  },
  ViewXR: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  ImageaA: {
    height: 180,
    width: '100%',
  },
  TextAO: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  TextID: {
    fontSize: 13,
  },
  Vieww5: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewtW: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  Viewkv: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  TextI9: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  View_9a: {
    marginRight: '1%',
    width: '49%',
  },
  Imageyr: {
    height: 180,
    width: '100%',
  },
  TextQW: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textDecorationLine: 'line-through',
  },
  Textx4: {
    fontSize: 13,
  },
  View_1N: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_4r: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingLeft: 4,
    marginRight: 4,
    alignItems: 'flex-start',
    marginLeft: 4,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    paddingRight: 4,
  },
  View_0p: {
    marginRight: 20,
    width: '100%',
    height: 180,
  },
  TextyL: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
  },
  ViewZd: {
    marginRight: '1%',
    width: '49%',
  },
  ViewQc: {
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
  ImageyU: {
    height: 180,
    width: '100%',
  },
  TextHL: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextE0: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  ViewoI: {
    marginRight: 20,
    height: 180,
    width: '100%',
  },
  View_8Y: {
    marginRight: '1%',
    width: '49%',
  },
  Imageop: {
    width: '100%',
    height: 180,
  },
  TextXy: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextFH: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  ViewHE: {
    height: 180,
    width: '100%',
  },
  ViewxV: {
    marginLeft: '1%',
    width: '49%',
  },
  Viewra: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  ImageTg: {
    height: 180,
    width: '100%',
  },
  Text_1I: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextK3: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  ViewYv: {
    marginRight: 20,
    height: 180,
    width: '100%',
  },
  ViewZk: {
    marginRight: '1%',
    width: '49%',
  },
  Imager2: {
    width: '100%',
    height: 180,
  },
  TextEm: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  Textmc: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  ViewNK: {
    height: 180,
    width: '100%',
  },
  ViewAA: {
    marginLeft: '1%',
    width: '49%',
  },
  Viewed: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  Image_9U: {
    height: 180,
    width: '100%',
  },
  TextxH: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextWc: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  Views0: {
    marginRight: 20,
    height: 180,
    width: '100%',
  },
  ViewaC: {
    marginRight: '1%',
    width: '49%',
  },
  ImagenI: {
    width: '100%',
    height: 180,
  },
  Text_3Z: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextoH: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  ViewQm: {
    height: 180,
    width: '100%',
  },
  ViewJ8: {
    marginLeft: '1%',
    width: '49%',
  },
  ViewnW: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 45,
  },
  Image_5v: {
    height: 180,
    width: '100%',
  },
  Textmt: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextKa: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  ViewM2: {
    marginRight: 20,
    height: 180,
    width: '100%',
  },
  ViewYS: {
    marginRight: '1%',
    width: '49%',
  },
  Imagem0: {
    width: '100%',
    height: 180,
  },
  TextEG: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
  },
  TextnQ: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  Viewyb: {
    height: 180,
    width: '100%',
  },
  ViewOa: {
    marginLeft: '1%',
    width: '49%',
  },
  ViewRu: {
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
