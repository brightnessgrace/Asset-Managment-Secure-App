import React from 'react'
import HomeStack from './HomeStack';
import Library from '../Library';
import Search from '../Search';
import Profile from '../Profile';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

  
  function TabTwoNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  function TabThreeNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }

    
  function TabFourNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }

    
  function TabFiveNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }



const Tab = createBottomTabNavigator();

function Navigation() {
    return (
      <Tab.Navigator   
        initialRouteName="Home"
        tabBarOptions={{ activeTintColor: '#05375a', style:{backgroundColor:'#F5F5F5'}, }}
    
      >
        <Tab.Screen name="Home" component={HomeStack}
          options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
              <Fontisto name="home" color={color} size={size} /> ), }}
        />
        <Tab.Screen name="TabTwoNavigator" component={Search}
          options={{ tabBarLabel: 'Search', tabBarIcon: ({ color, size }) => (
              <Icon name="search1" color={color} size={size} />
            ), }}
        />
       
          <Tab.Screen name="TabFourNavigator"  component={Library}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="subscriptions" color={color} size={size} />
            ),
          }}
        />
     

         <Tab.Screen
          name="TabFiveNavigator"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="pluscircleo" color={color} size={size} />
            ),
          }}
        />

      </Tab.Navigator>
    );
  }

  export default function BottomTabNavigator() {
    return (

        <Navigation />
    
    );
  }

 