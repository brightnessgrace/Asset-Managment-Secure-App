import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator  from './BottomTabNavigator';
import Profile from '../Profile';

export default function Navigation () {

    return(

        <RootNavigation />
      );
}

const Stack = createStackNavigator();

function RootNavigation() {
    return (
     
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
         
        </Stack.Navigator>
      
    );
  }

