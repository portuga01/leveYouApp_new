import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as Leveyou$appApi from '../apis/Leveyou$appApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ActionSheet,
  ActionSheetCancel,
  Divider,
  IconButton,
  ScreenContainer,
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

const ConversationsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const authUserPOST = Leveyou$appApi.useAuthUserPOST();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View style={styles.ViewnI}>
        <View style={styles.Viewok}>
          <Text style={[styles.TextNQ, { color: theme.colors.strong }]}>
            {'Conversas recentes'}
          </Text>
        </View>

        <View style={styles.Viewau} pointerEvents={'auto'}>
          <DraftbitExampleDataApi.FetchGETCryptoPrices782GET>
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
                  data={data}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ChatScreen', {
                              convarsationsId:
                                listData && listData['%_change_1h'],
                              conversationRating: 4.2,
                              conversationImage:
                                'https://rondoniaja.com/wp-content/uploads/2021/10/Meme-de-Zuckerberg.jpg',
                              conversationTitle: listData?.name,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles.Viewxu}>
                          <View style={styles.Viewv3}>
                            <View
                              style={[
                                styles.Viewl9,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderColor: theme.colors.light,
                                  borderRadius: theme.roundness,
                                },
                              ]}
                            >
                              <Image
                                style={[
                                  styles.ImageMR,
                                  { borderRadius: theme.roundness },
                                ]}
                                source={{
                                  uri: 'https://rondoniaja.com/wp-content/uploads/2021/10/Meme-de-Zuckerberg.jpg',
                                }}
                                resizeMode={'cover'}
                              />
                            </View>

                            <View style={styles.View_7G}>
                              <Text
                                style={[
                                  styles.Textti,
                                  { color: theme.colors.strong },
                                ]}
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                              >
                                {listData?.name}
                              </Text>

                              <View style={styles.View_8W}>
                                <Text
                                  style={styles.Textfr}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {listData && listData['%_change_24h']}
                                  {' % (24H)'}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <View style={styles.ViewLU}>
                            <IconButton
                              onPress={() => {
                                try {
                                  setGlobalVariableValue({
                                    key: 'actionSheetConversations',
                                    value: true,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              icon={'Feather/more-vertical'}
                              size={32}
                              color={theme.colors.medium}
                            />
                          </View>
                        </View>
                        <Divider
                          style={styles.DividerCD}
                          height={1}
                          color={theme.colors.divider}
                        />
                      </Touchable>
                    );
                  }}
                  contentContainerStyle={styles.FlatListo2Content}
                  numColumns={1}
                  data={data}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchGETCryptoPrices782GET>
        </View>
      </View>

      <ActionSheet>
        <ActionSheetCancel label={'Deletar'} />
        <ActionSheetCancel
          onPress={async () => {
            try {
              await authUserPOST.mutateAsync({ phone: 'hg' });
              setGlobalVariableValue({
                key: 'actionSheetConversations',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Bloquer '}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'actionSheetConversations',
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
  TextNQ: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  Viewok: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  ImageMR: {
    minWidth: 48,
    maxWidth: 48,
    minHeight: 48,
    maxHeight: 48,
  },
  Viewl9: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  Textti: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 15,
  },
  Textfr: {
    fontFamily: 'System',
    fontWeight: '200',
  },
  View_8W: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  View_7G: {
    alignSelf: 'stretch',
  },
  Viewv3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  ViewLU: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Viewxu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  DividerCD: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListo2Content: {
    flex: 1,
  },
  Viewau: {
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: -20,
  },
  ViewnI: {
    paddingBottom: 16,
  },
});

export default withTheme(ConversationsScreen);
