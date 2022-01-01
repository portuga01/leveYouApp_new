import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Divider,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MinhaCarteiraScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const responseSendEmail = response => {
    console.log(response);
  };

  const [actiobSheet1, setActiobSheet1] = React.useState('');
  const [manageMeansPaymentModal, setManageMeansPaymentModal] =
    React.useState('');
  const [transferBalanceModal, setTransferBalanceModal] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View
        style={[
          styles.Viewdm,
          {
            backgroundColor: theme.colors.secondary,
            borderRadius: 6,
            borderColor: theme.colors.divider,
          },
        ]}
        pointerEvents={'auto'}
      />
      <View style={styles.View_2T} pointerEvents={'auto'}>
        <Text
          style={[styles.TextfW, { color: theme.colors.background }]}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        >
          {'Carteira'}
        </Text>
        <Icon
          name={'MaterialIcons/help-center'}
          color={theme.colors.background}
          size={30}
        />
      </View>

      <View style={styles.ViewU2} pointerEvents={'auto'}>
        <Surface style={[styles.SurfaceHQ, { borderRadius: 6 }]} elevation={3}>
          <View style={styles.ViewWK} pointerEvents={'auto'}>
            <Icon
              style={styles.Icongb}
              name={'MaterialIcons/credit-card'}
              color={theme.colors.medium}
              size={40}
            />
            <View style={styles.Viewoy} pointerEvents={'auto'}>
              <Text
                style={[styles.TextSb, { color: theme.colors.medium }]}
                numberOfLines={2}
                ellipsizeMode={'tail'}
              >
                {'Cartões e meios de pagamentos'}
              </Text>
            </View>
          </View>

          <View style={styles.ViewUP} pointerEvents={'auto'}>
            <Link
              onPress={() => {
                try {
                  setManageMeansPaymentModal(!manageMeansPaymentModal);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.LinkdN, { color: theme.colors.primary }]}
              numberOfLines={2}
              ellipsizeMode={'tail'}
              title={'Gerenciar meios de pagamento'}
            />
          </View>
        </Surface>

        <Surface style={[styles.SurfacelS, { borderRadius: 6 }]} elevation={3}>
          <View style={styles.ViewDI} pointerEvents={'auto'}>
            <Icon
              style={styles.IconB4}
              name={'MaterialIcons/attach-money'}
              color={theme.colors.medium}
              size={40}
            />
            <Text
              style={[styles.Texttb, { color: theme.colors.medium }]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
            >
              {'Saldo'}
            </Text>
          </View>

          <View style={styles.View_0N} pointerEvents={'auto'}>
            <Text
              style={[styles.TextVj, { color: theme.colors.strong }]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
            >
              {'R$'} {'9.999,99'}
            </Text>
          </View>

          <View style={styles.ViewAJ} pointerEvents={'auto'}>
            <Link
              onPress={() => {
                try {
                  setTransferBalanceModal(!transferBalanceModal);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.LinkzD, { color: theme.colors.primary }]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              title={'Transferir saldo'}
            />
          </View>
        </Surface>
      </View>

      <View style={styles.Viewln} pointerEvents={'auto'}>
        <Surface style={[styles.SurfaceDk, { borderRadius: 6 }]} elevation={3}>
          <View style={styles.ViewKX} pointerEvents={'auto'}>
            <Text
              style={[styles.Textbb, { color: theme.colors.strong }]}
              ellipsizeMode={'tail'}
              numberOfLines={1}
            >
              {'Vendas último mês'}
            </Text>
            <IconButton
              onPress={() => {
                try {
                  setActiobSheet1(!actiobSheet1);
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'MaterialIcons/menu-open'}
              size={20}
            />
          </View>

          <View style={styles.ViewZz} pointerEvents={'auto'}>
            <View
              style={[styles.ViewEO, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewp4, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewTl, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewKP, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewBQ, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.View_7X, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewoB, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewGu, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewJx, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewjF, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewUm, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewDh, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewML, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewFP, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.View_32, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewn4, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.View_4X, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewpz, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewcx, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewNr, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewKV, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewEk, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewjV, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewTm, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewuc, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewGm, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewtF, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewio, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.ViewKI, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
            <View
              style={[styles.Viewi7, { backgroundColor: theme.colors.error }]}
              pointerEvents={'auto'}
            />
          </View>
        </Surface>
      </View>

      <View style={styles.ViewN7} pointerEvents={'auto'}>
        <Text
          style={[styles.TextmZ, { color: theme.colors.strong }]}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        >
          {'Histórico de compras e vendas - ultimos 2 mêses'}
        </Text>
        <Divider style={styles.DividerAu} color={theme.colors.divider} />
        <View style={styles.Viewl0} pointerEvents={'auto'}>
          <DraftbitExampleDataApi.FetchGET10MostRecentArticles17422GET>
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
                      <View
                        style={[
                          styles.ViewD7,
                          { borderColor: theme.colors.divider },
                        ]}
                        pointerEvents={'auto'}
                      >
                        <Text
                          style={[
                            styles.Textlk,
                            { color: theme.colors.strong },
                          ]}
                          numberOfLines={1}
                          ellipsizeMode={'head'}
                        >
                          {'Em '}
                          {'12 de julho 2021'}
                        </Text>

                        <View style={styles.View_2I} pointerEvents={'auto'}>
                          <Text
                            style={[
                              styles.TextRK,
                              { color: theme.colors.strong },
                            ]}
                          >
                            {'Doação para Azilo Santo Antônio'}
                            {' - '}
                            {'R$'} {'10,00'} {listData?.name}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                  contentContainerStyle={styles.FlatListkeContent}
                  numColumns={1}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchGET10MostRecentArticles17422GET>
        </View>
      </View>

      <Modal
        style={styles.ModalI5}
        visible={manageMeansPaymentModal}
        animationType={'slide'}
        presentationStyle={'pageSheet'}
      >
        <View style={styles.Viewtw} pointerEvents={'auto'}>
          <IconButton
            onPress={() => {
              try {
                setManageMeansPaymentModal(!manageMeansPaymentModal);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.IconButtontB}
            icon={'MaterialIcons/close'}
            size={40}
            color={theme.colors.error}
          />
        </View>
      </Modal>

      <Modal
        style={styles.Modal_0h}
        visible={transferBalanceModal}
        animationType={'slide'}
        presentationStyle={'pageSheet'}
      >
        <View style={styles.ViewK0} pointerEvents={'auto'}>
          <IconButton
            onPress={() => {
              try {
                setTransferBalanceModal(!transferBalanceModal);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.IconButtonRe}
            icon={'MaterialIcons/close'}
            size={40}
            color={theme.colors.error}
          />
        </View>
      </Modal>

      <ActionSheet visible={actiobSheet1}>
        <ActionSheetItem
          onPress={async () => {
            try {
              await DraftbitExampleDataApi.gET10MostRecentArticles17422GET(
                Constants
              );
              setActiobSheet1(!actiobSheet1);
              responseSendEmail(undefined);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ActionSheetItemFv}
          label={'Enviar relatórios para E-mail'}
          color={theme.colors.medium}
        />
        <ActionSheetItem
          style={styles.ActionSheetItemDd}
          label={'Ocultar gráficos de vendas'}
          color={theme.colors.medium}
        />
        <ActionSheetItem
          style={styles.ActionSheetItemh4}
          label={'Exibir gráficos de vendas'}
          color={theme.colors.medium}
        />
        <ActionSheetItem
          style={styles.ActionSheetItem_2X}
          label={'Ver histórico detalhado'}
          color={theme.colors.medium}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setActiobSheet1(!actiobSheet1);
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
  Viewdm: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    borderBottomWidth: 1,
  },
  TextfW: {
    fontSize: 21,
    fontFamily: 'MontserratRegular',
  },
  View_2T: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 6,
  },
  Icongb: {
    top: 8,
    left: 8,
  },
  TextSb: {
    fontFamily: 'MontserratRegular',
    fontSize: 12,
    textTransform: 'uppercase',
    marginTop: 8,
    marginRight: 8,
  },
  Viewoy: {
    width: '70%',
  },
  ViewWK: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LinkdN: {
    fontFamily: 'MontserratRegular',
    textAlign: 'center',
  },
  ViewUP: {
    marginTop: 18,
    marginLeft: 8,
    marginRight: 8,
    alignSelf: 'center',
  },
  SurfaceHQ: {
    minHeight: 40,
    height: 100,
    width: '49%',
    marginRight: '2%',
  },
  IconB4: {
    top: 8,
    left: 8,
  },
  Texttb: {
    fontFamily: 'MontserratRegular',
    fontSize: 16,
    textTransform: 'uppercase',
    marginTop: 8,
    marginRight: 8,
  },
  ViewDI: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextVj: {
    fontFamily: 'MontserratBold',
  },
  View_0N: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'flex-end',
  },
  LinkzD: {
    fontFamily: 'MontserratRegular',
    textAlign: 'center',
  },
  ViewAJ: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    alignSelf: 'center',
  },
  SurfacelS: {
    minHeight: 40,
    height: 100,
    width: '49%',
    marginRight: '2%',
  },
  ViewU2: {
    flexDirection: 'row',
    marginLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    marginRight: 8,
    paddingLeft: 8,
    paddingTop: 8,
  },
  Textbb: {
    fontFamily: 'MontserratRegular',
  },
  ViewKX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewEO: {
    width: '2%',
    height: '68%',
    marginRight: '1%',
  },
  Viewp4: {
    width: '2%',
    height: '55%',
    marginRight: '1%',
  },
  ViewTl: {
    width: '2%',
    height: '45%',
    marginRight: '1%',
  },
  ViewKP: {
    width: '2%',
    height: '22%',
    marginRight: '1%',
  },
  ViewBQ: {
    width: '2%',
    height: '18%',
    marginRight: '1%',
  },
  View_7X: {
    width: '2%',
    height: '15%',
    marginRight: '1%',
  },
  ViewoB: {
    width: '2%',
    height: '10%',
    marginRight: '1%',
  },
  ViewGu: {
    width: '2%',
    height: '40%',
    marginRight: '1%',
  },
  ViewJx: {
    width: '2%',
    height: '55%',
    marginRight: '1%',
  },
  ViewjF: {
    width: '2%',
    height: '40%',
    marginRight: '1%',
  },
  ViewUm: {
    width: '2%',
    height: '36%',
    marginRight: '1%',
  },
  ViewDh: {
    width: '2%',
    height: '33%',
    marginRight: '1%',
  },
  ViewML: {
    width: '2%',
    height: '35%',
    marginRight: '1%',
  },
  ViewFP: {
    width: '2%',
    height: '32%',
    marginRight: '1%',
  },
  View_32: {
    width: '2%',
    height: '30%',
    marginRight: '1%',
  },
  Viewn4: {
    width: '2%',
    height: '32%',
    marginRight: '1%',
  },
  View_4X: {
    width: '2%',
    height: '33%',
    marginRight: '1%',
  },
  Viewpz: {
    width: '2%',
    height: '33%',
    marginRight: '1%',
  },
  Viewcx: {
    width: '2%',
    height: '40%',
    marginRight: '1%',
  },
  ViewNr: {
    width: '2%',
    height: '37%',
    marginRight: '1%',
  },
  ViewKV: {
    width: '2%',
    height: '35%',
    marginRight: '1%',
  },
  ViewEk: {
    width: '2%',
    height: '40%',
    marginRight: '1%',
  },
  ViewjV: {
    width: '2%',
    height: '70%',
    marginRight: '1%',
  },
  ViewTm: {
    width: '2%',
    height: '12%',
    marginRight: '1%',
  },
  Viewuc: {
    width: '2%',
    height: '15%',
    marginRight: '1%',
  },
  ViewGm: {
    width: '2%',
    height: '17%',
    marginRight: '1%',
  },
  ViewtF: {
    width: '2%',
    height: '30%',
    marginRight: '1%',
  },
  Viewio: {
    width: '2%',
    height: '10%',
    marginRight: '1%',
  },
  ViewKI: {
    width: '2%',
    height: '12%',
    marginRight: '1%',
  },
  Viewi7: {
    width: '2%',
    height: '47%',
    marginRight: '1%',
  },
  ViewZz: {
    height: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  SurfaceDk: {
    minHeight: 40,
    height: 160,
    width: '100%',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
  },
  Viewln: {
    flexDirection: 'row',
    marginLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    marginBottom: 16,
    marginRight: 8,
    paddingLeft: 8,
    paddingTop: 8,
  },
  TextmZ: {
    fontFamily: 'MontserratLight',
  },
  DividerAu: {
    height: 1,
    marginBottom: 8,
  },
  Textlk: {
    fontFamily: 'MontserratThin',
  },
  TextRK: {
    fontFamily: 'MontserratRegular',
  },
  View_2I: {
    flexDirection: 'row',
  },
  ViewD7: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  FlatListkeContent: {
    flex: 1,
  },
  Fetchrr: {
    minHeight: 40,
  },
  Viewl0: {
    height: '120%',
  },
  ViewN7: {
    marginLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    marginBottom: 16,
    marginRight: 8,
    paddingLeft: 8,
    paddingTop: 8,
  },
  IconButtontB: {
    marginRight: 5,
    marginTop: 5,
  },
  Viewtw: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ModalI5: {
    height: '40%',
  },
  IconButtonRe: {
    marginRight: 5,
    marginTop: 5,
  },
  ViewK0: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Modal_0h: {
    height: '40%',
  },
  ActionSheetItemFv: {
    textAlign: 'center',
  },
  ActionSheetItemDd: {
    textAlign: 'center',
  },
  ActionSheetItemh4: {
    textAlign: 'center',
  },
  ActionSheetItem_2X: {
    textAlign: 'center',
  },
});

export default withTheme(MinhaCarteiraScreen);
