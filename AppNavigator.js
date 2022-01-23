import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import AnnounceScreen from './screens/AnnounceScreen';
import AuthCodeScreen from './screens/AuthCodeScreen';
import AuthNumScreen from './screens/AuthNumScreen';
import CampaingScreen from './screens/CampaingScreen';
import ChatScreen from './screens/ChatScreen';
import ConversationsScreen from './screens/ConversationsScreen';
import HomeScreen from './screens/HomeScreen';
import LoaderScreen from './screens/LoaderScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import MyWalletScreen from './screens/MyWalletScreen';
import SearchScreen from './screens/SearchScreen';
import ShopCutScreen from './screens/ShopCutScreen';

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
      initialRouteName="HomeScreen"
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
      backBehavior="history"
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          unmountOnBlur: false,
          title: 'home',
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
        name="AnnounceScreen"
        component={AnnounceScreen}
        options={{
          tabBarVisible: false,
          unmountOnBlur: true,
          title: 'announce',
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
        name="MyWalletScreen"
        component={MyWalletScreen}
        options={{
          unmountOnBlur: true,
          title: 'myWallet',
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
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          unmountOnBlur: true,
          title: 'myAccount',
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
    <Stack.Navigator
      headerMode="none"
      initialRouteName="AuthNumScreen"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'vertical',
        animationEnabled: true,
      }}
    >
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
    </Stack.Navigator>
  );
}

function CampaingNavigator() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="CampaingScreen"
        component={CampaingScreen}
        options={{
          headerTitle: 'title campaing where',
          headerTitleAlign: 'center',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animationEnabled: true,
          headerBackImage: ({ tintColor }) => (
            <Icon
              name="Feather/chevron-left"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconLeft]}
            />
          ),
          headerBackTitle: 'voltar',
          title: 'campaing',
        }}
      />
    </Stack.Navigator>
  );
}

function ChatNavigator() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="ConversationsScreen"
        component={ConversationsScreen}
        options={{
          headerTitle: 'Chat leveYou',
          headerTitleAlign: 'center',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animationEnabled: true,
          headerBackImage: ({ tintColor }) => (
            <Icon
              name="Feather/chevron-left"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconLeft]}
            />
          ),
          headerBackTitle: ' voltar',
          title: 'conversations',
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animationEnabled: true,
          title: 'chat',
        }}
      />
    </Stack.Navigator>
  );
}

function OtherNavigator() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="ShopCutScreen"
        component={ShopCutScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animationEnabled: true,
          title: 'shopCut',
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: ' ',
          headerTitleAlign: 'center',
          cardOverlayEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animationEnabled: true,
          headerBackImage: ({ tintColor }) => (
            <Icon
              name="Feather/chevron-left"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconLeft]}
            />
          ),
          headerBackTitle: 'voltar',
          title: 'search',
        }}
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
            headerShown: false,
            cardOverlayEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
            title: 'loaderScreen',
          }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="CampaingNavigator" component={CampaingNavigator} />
        <Stack.Screen name="ChatNavigator" component={ChatNavigator} />
        <Stack.Screen name="OtherNavigator" component={OtherNavigator} />
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
