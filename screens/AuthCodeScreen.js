import React from 'react';
import * as Leveyou$appApi from '../apis/Leveyou$appApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  IconButton,
  Link,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AuthCodeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const help = () => {
    Alert.alert(
      'Verificando sua identidade',
      'informe o código recebido via SMS - ATENÇÂO: A leveYou nunca  irá solicitar este código por quailsquer canais de comunicação'
    );
  };

  const verifyCode = code => {
    const clear = parseInt(code);
    let response;
    clear.length != 5 ? (response = false) : (response = true);
    return response;
  };

  const { theme } = props;
  const { navigation } = props;

  const authUserPOST = Leveyou$appApi.useAuthUserPOST();

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.secondary }]}
      hasSafeArea={true}
    >
      <View style={styles.Viewx4} pointerEvents={'auto'}>
        <View style={styles.Viewad} pointerEvents={'auto'}>
          <Text style={[styles.Textkn, { color: theme.colors.background }]}>
            {'Confirme o código'}
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

        <Text style={[styles.Textcu, { color: theme.colors.background }]}>
          {'Informe o código recebido via SMS'}
        </Text>
      </View>

      <View
        style={[styles.ViewcB, { backgroundColor: theme.colors.background }]}
        pointerEvents={'auto'}
      >
        <View style={styles.ViewBM} pointerEvents={'auto'}>
          <KeyboardAvoidingView enabled={true} behavior={'padding'}>
            <TextInput
              onChangeText={() => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputK1,
                {
                  borderColor: theme.colors.secondary,
                  color: theme.colors.strong,
                },
              ]}
              value={null}
              placeholder={'1 - 2 - 3 - 4 - 5'}
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

          <View style={styles.Viewbr} pointerEvents={'auto'}>
            <Link
              style={{ color: theme.colors.primary }}
              title={'Solicitar um novo código em 1:30 s'}
            />
          </View>
          <ButtonSolid
            onPress={async () => {
              try {
                verifyCode(textInputValue);
                const responsePostNum = await authUserPOST.mutateAsync({
                  code: parseInt(textInputValue, 10),
                  continueAuthorization:
                    props.route?.params?.continueAuthorization ?? '',
                });
                navigation.navigate('AuthNavigator');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidM9,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Confirmar código'}
            icon={'Feather/arrow-right'}
            loading={false}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textkn: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '500',
  },
  Viewad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Textcu: {
    marginTop: 10,
    fontSize: 16,
  },
  Viewx4: {
    marginLeft: 20,
    marginTop: 25,
    marginRight: 20,
  },
  TextInputK1: {
    borderBottomWidth: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
  },
  Viewbr: {
    flexDirection: 'row',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ButtonSolidM9: {
    fontFamily: 'System',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 35,
    marginRight: 35,
  },
  ViewBM: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  ViewcB: {
    height: '80%',
  },
  screen: {
    justifyContent: 'space-between',
  },
});

export default withTheme(AuthCodeScreen);
