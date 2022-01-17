import React from 'react';
import * as Leveyou$appApi from '../apis/Leveyou$appApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Checkbox,
  Divider,
  IconButton,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const AuthNumScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const verify = (num, checkValue) => {
    if (num.toString().length !== 11) {
      Alert.alert(
        'Número inválido',
        'Verifique se o DDD foi informado ou se o número está incorreto'
      );
      return false;
    }
    if (!checkValue) {
      Alert.alert(
        'Você deve aceitar os termos',
        'Você deve ler e aceitar os termos de uso e política de privacidade da leveYou'
      );
      return false;
    }
    return true;
  };

  const help = () => {
    Alert.alert(
      'Verificando sua identidade',
      'Um código de verificação será enviado ao número que você informar abaixo, este código é único e não deve ser compartilhado. O código que será enviado deve ser informado em etapas posteriores'
    );
  };

  const { theme } = props;
  const { navigation } = props;

  const verifyNumberPOST = Leveyou$appApi.useVerifyNumberPOST();

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.secondary }]}
      hasSafeArea={true}
    >
      <View style={styles.ViewR0} pointerEvents={'auto'}>
        <View style={styles.Viewg9} pointerEvents={'auto'}>
          <Text style={[styles.TextG5, { color: theme.colors.background }]}>
            {'Seu número de telefone'}
          </Text>
          <IconButton
            onPress={() => {
              try {
                help();
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Feather/help-circle'}
            size={22}
            color={theme.colors.background}
          />
        </View>

        <Text style={[styles.TextmD, { color: theme.colors.background }]}>
          {
            'Informe seu número abaixo para receber um código de confirmação de 5 dígitos'
          }
        </Text>
      </View>

      <View
        style={[styles.Viewa8, { backgroundColor: theme.colors.background }]}
        pointerEvents={'auto'}
      >
        <View style={styles.ViewFO} pointerEvents={'auto'}>
          <KeyboardAvoidingView enabled={true} behavior={'padding'}>
            <TextInput
              onChangeText={textInputValue => {
                try {
                  setTextInputValue(textInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputem,
                {
                  borderColor: theme.colors.secondary,
                  color: theme.colors.strong,
                },
              ]}
              value={textInputValue}
              placeholder={'DDD + Número'}
              spellcheck={false}
              clearButtonMode={'always'}
              placeholderTextColor={theme.colors.medium}
              textContentType={'streetAddressLine1'}
              keyboardType={'number-pad'}
              maxLength={11}
              returnKeyType={'done'}
              allowFontScaling={false}
            />
          </KeyboardAvoidingView>

          <View style={styles.ViewMr} pointerEvents={'auto'}>
            <Checkbox
              onPress={checkboxValue => {
                try {
                  setCheckboxValue(checkboxValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              status={checkboxValue}
              uncheckedColor={theme.colors.light}
              color={theme.colors.secondary}
              size={28}
            />
            <Link
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'modalTerms',
                    value: true,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Linkrb, { color: theme.colors.primary }]}
              title={
                'Declaro que li e aceito os termos de uso e política da privacidade'
              }
            />
          </View>
          <ButtonSolid
            onPress={async () => {
              try {
                verify(textInputValue, checkboxValue);
                const responsePostNum = await verifyNumberPOST.mutateAsync({
                  phone: parseInt(textInputValue, 10),
                });
                navigation.navigate('AuthCodeScreen', {
                  numToAuth: textInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidbk,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Continuar'}
            icon={'Feather/arrow-right'}
            loading={false}
          />
        </View>
      </View>

      <Modal
        visible={Constants['modalTerms']}
        animationType={'fade'}
        presentationStyle={'pageSheet'}
      >
        <View style={styles.ViewaN} pointerEvents={'auto'}>
          <Text style={[styles.TextjF, { color: theme.colors.secondary }]}>
            {'Termos de uso e política de privacidade'}
          </Text>
        </View>

        <ScrollView
          style={{ backgroundColor: theme.colors.background }}
          contentContainerStyle={styles.ScrollView_6fContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Leveyou$appApi.FetchGetTermsGET>
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
                      <>
                        <Text
                          style={[
                            styles.TextkL,
                            { color: theme.colors.strong },
                          ]}
                          numberOfLines={3}
                          ellipsizeMode={'tail'}
                        >
                          {listData?.title}
                        </Text>

                        <Text style={{ color: theme.colors.strong }}>
                          {listData?.content}
                        </Text>
                      </>
                    );
                  }}
                  contentContainerStyle={styles.FlatListyMContent}
                  numColumns={1}
                />
              );
            }}
          </Leveyou$appApi.FetchGetTermsGET>
        </ScrollView>

        <View
          style={[styles.ViewDn, { borderColor: theme.colors.divider }]}
          pointerEvents={'auto'}
        >
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'modalTerms',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchableat}
          >
            <View style={styles.ViewUY} pointerEvents={'auto'}>
              <Text style={{ color: theme.colors.error }}>
                {'Recusar termos'}
              </Text>
            </View>
          </Touchable>
          <Divider style={styles.Dividerik} color={theme.colors.divider} />
          <Touchable
            onPress={() => {
              try {
                setCheckboxValue(true);
                setGlobalVariableValue({
                  key: 'modalTerms',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchableyl}
          >
            <View
              style={[styles.ViewhO, { backgroundColor: theme.colors.primary }]}
              pointerEvents={'auto'}
            >
              <Text style={{ color: theme.colors.background }}>
                {'Aceito os termos de uso'}
              </Text>
            </View>
          </Touchable>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextG5: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '500',
  },
  Viewg9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextmD: {
    marginTop: 10,
    fontSize: 16,
  },
  ViewR0: {
    marginLeft: 20,
    marginTop: 25,
    marginRight: 20,
  },
  TextInputem: {
    borderBottomWidth: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    height: 40,
    fontSize: 20,
  },
  Linkrb: {
    textDecorationLine: 'underline',
  },
  ViewMr: {
    flexDirection: 'row',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ButtonSolidbk: {
    fontFamily: 'System',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 35,
    marginRight: 35,
  },
  ViewFO: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  Viewa8: {
    height: '80%',
  },
  TextjF: {
    fontSize: 20,
  },
  ViewaN: {
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 20,
    marginTop: 20,
    height: 30,
  },
  TextkL: {
    fontSize: 17,
    textTransform: 'capitalize',
    marginBottom: 5,
    marginTop: 20,
    fontFamily: 'System',
    fontWeight: '500',
  },
  FlatListyMContent: {
    flex: 1,
  },
  FetchyY: {
    minHeight: 40,
  },
  ScrollView_6fContent: {
    marginLeft: 15,
    marginRight: 15,
  },
  ViewUY: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Touchableat: {
    width: '50%',
    height: 50,
  },
  Dividerik: {
    height: 50,
    width: 1,
  },
  ViewhO: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Touchableyl: {
    width: '50%',
    height: 50,
  },
  ViewDn: {
    height: 50,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  screen: {
    justifyContent: 'space-between',
  },
});

export default withTheme(AuthNumScreen);
