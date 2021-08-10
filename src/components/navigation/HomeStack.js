import React from 'react';
import { View, Text, Image, SafeAreaView,
    StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile  from '../Profile';
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const logo =  require('../../../assets/image/amsa.jpeg');


function CustomHeader()  {
  return (

    <SafeAreaView style ={styles.container} >
    <View style={styles.subcontainer}>
    <Image resizeMode="contain"  style={styles.imagecontainer} source={logo} />
      <View style={{flexDirection: 'row', width: 150,  justifyContent: 'space-between'}}>
          
          <Icon name="bells" size={28} color="#05375a" />
          <Icon name="search1" size={28} color="#05375a" />
          <FontAwesome name="user-circle-o" size={28} color="#05375a" />
        </View>
       </View> 
    </SafeAreaView>    
  );

}

const HomeStack = createStackNavigator();

function HomeStackComponent() {
  return (
    <HomeStack.Navigator 
        screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <HomeStack.Screen
        name="TabOneScreen"
        component={Profile}
        options = {{ headerTitle: 'Tab One Title' }}
      />
      
    </HomeStack.Navigator>
  );
}

export default HomeStackComponent;

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F5F5F5',
      borderBottomWidth:2,
      borderColor:'#05375a',
      
     },
     subcontainer:{
      flexDirection:'row',
      margin:2,
      padding:-5,
      justifyContent:'space-between',
      alignItems:'center',
     },
     imagecontainer:{
        width:100, 
        height: 55,
     }
    })
   