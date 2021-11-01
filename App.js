import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/Main';
import SinglePlayerScreen from './components/main/SinglePlayer';
import AIScreen from './components/main/AI';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={MainScreen} options={{ headerShown:false }}/>
        <Stack.Screen name='SinglePlayer' component={SinglePlayerScreen} options={{ headerShown:false }}/>
        <Stack.Screen name='AI' component={AIScreen} options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}