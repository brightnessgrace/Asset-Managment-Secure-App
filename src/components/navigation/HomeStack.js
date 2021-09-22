import React from 'react';
import { View, Text, Image, SafeAreaView,
    StyleSheet,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore  from '../Explore';
const logo =  require('../../../assets/image/amsa.jpeg');


const CustomHeader = ({navigation}) =>  {
  return (

    <SafeAreaView style ={styles.container} >
       <View style={styles.subcontainer}>
       
    
       </View> 
                    
    </SafeAreaView>    
  );

}

const HomeStack = createStackNavigator();

function HomeStackComponent() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen
        name="TabOneScreen" component={Explore}  options = {{ headerShown: false}} />     
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
   