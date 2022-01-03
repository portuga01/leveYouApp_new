import React from 'react';
import * as RestaurantListApi from '../apis/RestaurantListApi.js';
import {
  Divider,
  FieldSearchBarFull,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const RestaurantListScreen = props => {
  const { theme } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  return (
    <ScreenContainer
      style={[
        styles.screen,
        { backgroundColor: theme.colors.custom_rgb247_247_245 },
      ]}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <FieldSearchBarFull
          onChange={searchBarValue => {
            try {
              setSearchBarValue(searchBarValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.FieldSearchBarFullr9,
            {
              borderRadius: theme.roundness,
              borderColor: theme.colors.divider,
            },
          ]}
          placeholder={'Search for nearby restaurants.'}
          value={searchBarValue}
        />
        <RestaurantListApi.FetchFavoritePlacesGET>
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
              <View style={styles.ViewD6}>
                <Text style={[styles.TextKr, { color: theme.colors.strong }]}>
                  {'Popular Places\n'}
                </Text>

                <Text
                  style={[
                    styles.TextW1,
                    { color: theme.colors.custom_rgb255_194_69 },
                  ]}
                >
                  {'5-star Restaurants near your location.'}
                </Text>
                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.Viewqa}>
                        <ScrollView
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                          bounces={true}
                          horizontal={true}
                        >
                          <View
                            style={[
                              styles.View_4X,
                              {
                                backgroundColor: theme.colors.divider,
                                borderRadius: theme.roundness,
                              },
                            ]}
                          >
                            <Image
                              style={[
                                styles.Imageag,
                                { borderRadius: theme.roundness },
                              ]}
                              source={{ uri: item['image'] }}
                              resizeMode={'cover'}
                            />
                            <Text
                              style={[
                                styles.TextpN,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {item && item['name']}
                            </Text>

                            <Text
                              style={[
                                styles.TextcV,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {item && item['city']}
                            </Text>
                          </View>
                        </ScrollView>
                      </View>
                    );
                  }}
                  style={styles.FlatListtp}
                  contentContainerStyle={styles.FlatListtpContent}
                  numColumns={1}
                  data={data}
                  horizontal={true}
                />
              </View>
            );
          }}
        </RestaurantListApi.FetchFavoritePlacesGET>
        <Divider
          style={styles.DividerQW}
          color={theme.colors.divider}
          height={1}
        />
        <RestaurantListApi.FetchFastestDeliveryGET>
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
              <View style={styles.ViewC8}>
                <Text style={[styles.TextZc, { color: theme.colors.strong }]}>
                  {'In a rush?'}
                </Text>

                <Text
                  style={[
                    styles.TextUN,
                    { color: theme.colors.custom_rgb255_194_69 },
                  ]}
                >
                  {"Here's the fastest delivery for you."}
                </Text>
                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.ViewgL}>
                        <ScrollView
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                          bounces={true}
                          horizontal={true}
                        >
                          <View
                            style={[
                              styles.ViewdK,
                              {
                                backgroundColor: theme.colors.divider,
                                borderRadius: theme.roundness,
                              },
                            ]}
                          >
                            <Image
                              style={[
                                styles.ImagefV,
                                { borderRadius: theme.roundness },
                              ]}
                              source={{ uri: item['image'] }}
                              resizeMode={'cover'}
                            />
                            <Text
                              style={[
                                styles.TextDZ,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {item && item['name']}
                            </Text>

                            <Text
                              style={[
                                styles.Textdt,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {item && item['city']}
                            </Text>
                          </View>
                        </ScrollView>
                      </View>
                    );
                  }}
                  style={styles.FlatListko}
                  contentContainerStyle={styles.FlatListkoContent}
                  numColumns={1}
                  data={data}
                  horizontal={true}
                />
              </View>
            );
          }}
        </RestaurantListApi.FetchFastestDeliveryGET>
        <Divider
          style={styles.DividerXS}
          color={theme.colors.divider}
          height={1}
        />
        <RestaurantListApi.FetchToday$sOffersGET>
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
              <View style={styles.ViewP2}>
                <Text style={[styles.TextnE, { color: theme.colors.strong }]}>
                  {"Today's Offers"}
                </Text>

                <Text
                  style={[
                    styles.TextMl,
                    { color: theme.colors.custom_rgb255_194_69 },
                  ]}
                >
                  {"Offers you can't refuse."}
                </Text>
                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.ViewSj}>
                        <ScrollView
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                          bounces={true}
                        >
                          <View
                            style={[
                              styles.View_65,
                              {
                                backgroundColor: theme.colors.divider,
                                borderRadius: theme.roundness,
                              },
                            ]}
                          >
                            <Image
                              style={[
                                styles.ImagetC,
                                { borderRadius: theme.roundness },
                              ]}
                              source={{ uri: item['image'] }}
                              resizeMode={'cover'}
                            />
                            <Text
                              style={[
                                styles.Text_2c,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {item && item['name']}
                            </Text>

                            <Text
                              style={[
                                styles.Textbl,
                                { color: theme.colors.medium },
                              ]}
                            >
                              {item && item['city']}
                            </Text>
                          </View>
                        </ScrollView>
                      </View>
                    );
                  }}
                  style={styles.FlatListyT}
                  numColumns={1}
                  horizontal={true}
                  data={data}
                />
              </View>
            );
          }}
        </RestaurantListApi.FetchToday$sOffersGET>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  FieldSearchBarFullr9: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  TextKr: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  TextW1: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  Imageag: {
    width: 250,
    height: 150,
  },
  TextpN: {
    marginTop: 4,
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 12,
  },
  TextcV: {
    fontFamily: 'System',
    fontWeight: 'regular',
    fontSize: 12,
  },
  View_4X: {
    width: 250,
    height: 150,
    marginRight: 20,
  },
  Viewqa: {
    marginTop: 24,
    marginBottom: 24,
    height: 200,
  },
  FlatListtp: {
    height: 220,
  },
  FlatListtpContent: {
    flexDirection: 'row',
  },
  ViewD6: {
    marginTop: 10,
  },
  DividerQW: {
    height: 1,
  },
  TextZc: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  TextUN: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 12,
  },
  ImagefV: {
    width: 250,
    height: 150,
  },
  TextDZ: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  Textdt: {
    fontSize: 12,
  },
  ViewdK: {
    width: 250,
    height: 150,
    marginRight: 20,
  },
  ViewgL: {
    marginTop: 24,
    marginBottom: 24,
    height: 200,
  },
  FlatListko: {
    height: 220,
  },
  FlatListkoContent: {
    flexDirection: 'row',
  },
  ViewC8: {
    marginTop: 24,
  },
  DividerXS: {
    height: 1,
  },
  TextnE: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  TextMl: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 12,
  },
  ImagetC: {
    width: 250,
    height: 150,
  },
  Text_2c: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  Textbl: {
    fontSize: 12,
  },
  View_65: {
    width: 250,
    height: 150,
    marginRight: 20,
  },
  ViewSj: {
    marginTop: 24,
    marginBottom: 24,
    height: 220,
  },
  FlatListyT: {
    height: 220,
  },
  ViewP2: {
    marginTop: 24,
  },
  screen: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(RestaurantListScreen);
