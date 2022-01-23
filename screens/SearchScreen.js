import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  FieldSearchBarFull,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const renderSearchHistory = position => {
    Console.log(Constants['searchHistory']);
    const response = Constants['searchHitory'] || false;
    return response;
  };

  const { theme } = props;

  const [fieldSearchBarFullValue, setFieldSearchBarFullValue] =
    React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <Surface style={[styles.SurfaceSK, { borderRadius: 8 }]} elevation={3}>
        <FieldSearchBarFull
          onChange={searchBarValue => {
            try {
              setSearchBarValue(searchBarValue);
              setFieldSearchBarFullValue(fieldSearchBarFullValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.FieldSearchBarFullVX}
          value={fieldSearchBarFullValue}
          placeholder={'Digite aqui a sua busca'}
          icon={'Feather/search'}
        />
        <>
          {!searchBarValue ? null : (
            <IconButton
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'toImportPKG',
                    value: false,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.IconButtonkx}
              icon={'Feather/arrow-right-circle'}
              size={40}
              color={theme.colors.secondary}
            />
          )}
        </>
      </Surface>

      <View
        style={[
          styles.ViewtY,
          { borderColor: theme.colors.light, borderRadius: 8 },
        ]}
        pointerEvents={'auto'}
      >
        <View style={styles.Viewmr} pointerEvents={'auto'}>
          <Text>{'Buscas recentes'}</Text>
          <>
            {!Constants['searchHistory'] ? null : (
              <IconButton
                icon={'Feather/trash'}
                size={25}
                color={theme.colors.error}
              />
            )}
          </>
        </View>
        <>
          {!!Constants['searchHistory'] ? null : (
            <View style={styles.ViewkZ} pointerEvents={'auto'}>
              <Text style={{ color: theme.colors.strong }}>
                {'Sem histórico de buscas'}
              </Text>
            </View>
          )}
        </>
        <>
          {!Constants['searchHistory'] ? null : (
            <View pointerEvents={'auto'}>
              <Touchable>
                <Text style={{ color: theme.colors.strong }}>
                  {'Double click me to edit 👀'}
                </Text>
              </Touchable>

              <Touchable>
                <Text style={{ color: theme.colors.strong }}>
                  {'Double click me to edit 👀'}
                </Text>
              </Touchable>

              <Touchable>
                <Text style={{ color: theme.colors.strong }}>
                  {'Double click me to edit 👀'}
                </Text>
              </Touchable>
            </View>
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  FieldSearchBarFullVX: {
    height: 50,
    width: '80%',
  },
  IconButtonkx: {
    marginRight: 10,
  },
  SurfaceSK: {
    minHeight: 40,
    alignContent: 'space-between',
    alignSelf: 'stretch',
    marginLeft: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 32,
    paddingLeft: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Viewmr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewkZ: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  ViewtY: {
    marginTop: 30,
    marginRight: 15,
    paddingLeft: 15,
    marginLeft: 15,
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 7,
    paddingRight: 15,
  },
});

export default withTheme(SearchScreen);
