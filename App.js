import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Image } from 'react-native';
import {Feather, FontAwesome, MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/HomePage';
import SearchPage from './src/screens/SearchPage';
import Profile from './src/screens/Profile';
import Upload from './src/screens/Upload';
import Reels from './src/screens/Reels';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({headerShown: false, tabBarShowLabel: false, tabBarStyle: {backgroundColor: 'black'}})}>
        <Tab.Screen name={'Home'} component={HomePage} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name="home" size={35} color={color} />
            ),
          }} />
        <Tab.Screen name={'Search'} component={SearchPage} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name="search" size={35} color={color} />
            ),
          }}/>
        <Tab.Screen name={'Upload'} component={Upload} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="plus-square" size={32} color={color} />
            ),
          }}/>
        <Tab.Screen name={'Reels'} component={Reels} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name="video-library" size={35} color={color} />
            ),
          }}/>
        <Tab.Screen name={'Profile'} component={Profile} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image style={{width: 33, height: 33, borderRadius: 15}} source={require('./assets/chime.jpg')} />
              // <Feather name="page" size={32} color={color} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

