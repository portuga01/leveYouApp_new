import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import AnunciosScreen from './screens/AnunciosScreen';
import AuthCodeScreen from './screens/AuthCodeScreen';
import AuthNumScreen from './screens/AuthNumScreen';
import InicioScreen from './screens/InicioScreen';
import LoaderScreen from './screens/LoaderScreen';
import MinhaCarteiraScreen from './screens/MinhaCarteiraScreen';
import MinhaContaScreen from './screens/MinhaContaScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ textAlign: 'center' }}>
        Your navigator is missing screens! Add some from the navigators tab on
        the left.
      </Text>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="InicioScreen"
      tabBarOptions={{
        allowFontScaling: false,
        keyboardHidesTabBar: true,
        labelPosition: 'below-icon',
        activeTintColor: theme.colors.primary,
        style: {
          backgroundColor: theme.colors.strongInverse,
          borderTopColor: theme.colors.divider,
        },
      }}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{
          unmountOnBlur: false,
          title: 'inicio',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/shopping-bag"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          tabBarLabel: 'início',
        }}
      />
      <Tab.Screen
        name="AnunciosScreen"
        component={AnunciosScreen}
        options={{
          tabBarVisible: false,
          unmountOnBlur: true,
          title: 'anuncios',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/tag"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          tabBarLabel: 'Anuncios',
        }}
      />
      <Tab.Screen
        name="MinhaCarteiraScreen"
        component={MinhaCarteiraScreen}
        options={{
          unmountOnBlur: true,
          title: 'minhaCarteira',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/dollar-sign"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          tabBarLabel: 'carteira',
        }}
      />
      <Tab.Screen
        name="MinhaContaScreen"
        component={MinhaContaScreen}
        options={{
          unmountOnBlur: true,
          title: 'minhaConta',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/user"
              size={25}
              color={focused ? theme.colors.primary : color}
            />
          ),
          tabBarLabel: 'minha conta',
        }}
      />
    </Tab.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlaceholderScreen"
        component={PlaceholderScreen}
        options={{ mode: 'modal', headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="LoaderScreen"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.strongInverse,
          },
          cardOverlayEnabled: true,
          gestureEnabled: true,
          gestureResponseDistance: { vertical: null, horizontal: 110 },
          gestureDirection: 'horizontal',
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="LoaderScreen"
          component={LoaderScreen}
          options={{
            cardOverlayEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
            title: 'loaderScreen',
          }}
        />
        <Stack.Screen
          name="AuthNumScreen"
          component={AuthNumScreen}
          options={{ title: 'authNum' }}
        />
        <Stack.Screen
          name="AuthCodeScreen"
          component={AuthCodeScreen}
          options={{ title: 'authCode' }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
