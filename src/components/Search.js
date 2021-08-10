import React,{ useState } from 'react';
import { View, Text, Image, SafeAreaView,
    StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const logo =  require('../../assets/image/amsa.jpeg');

function Search() {
    
    return(

        <View>
             <Text> Hello Ethan </Text>

        </View>

    );

}
function CustomHeader()  {
  return (

    <SafeAreaView style ={styles.container} >
    <View style={styles.subcontainer}>
            <TextInput
                style={styles.input}
                placeholder="Seacrh"
                placeholderTextColor="#05375a"
                autoCapitalize="none"/> 
     
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
        component={Search}
        options = {{ headerTitle: 'Tab One Title' }}
      />
      
    </HomeStack.Navigator>
  );
}

export default HomeStackComponent;

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F5F5F5',
  
      
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
     },input:{
          borderWidth:1,
          borderRadius:25,
          borderColor:'#05375a',
          width:'100%'
     }
    })
   