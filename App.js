import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Platform, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native';
import {Feather, MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/HomePage';
import SearchPage from './src/screens/SearchPage';
import Profile from './src/screens/Profile';
import Upload from './src/screens/Upload';
import Reels from './src/screens/Reels';


const Tab = createBottomTabNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={'100'} color={'dodgerblue'} style={{ transform: [{ scale: 2 }] }} />
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({headerShown: false, tabBarShowLabel: false, tabBarStyle: {backgroundColor: 'black'}, 
    tabBarActiveTintColor: '#E0E0E0', tabBarInactiveTintColor: 'grey'})}>
        <Tab.Screen name={'Home'} component={HomePage} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
          }} />
        <Tab.Screen name={'Search'} component={SearchPage} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="search" size={30} color={color} />
            ),
          }}/>
        <Tab.Screen name={'Upload'} component={Upload} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="plus-square" size={30} color={color} />
            ),
          }}/>
        <Tab.Screen name={'Reels'} component={Reels} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name="video-library" size={30} color={color} />
            ),
          }}/>
        <Tab.Screen name={'Profile'} component={Profile} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={[styles.container, {borderColor: color}]}>
                <Image style={styles.image} source={require('./assets/chime.jpg')} />
              </View>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 33, 
    borderWidth: 3, 
    height: 33, 
    borderRadius: 15, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image: {
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    alignSelf: 'center'
  },
  loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
