import React, { useState,Component } from 'react';
import { View,Text,Image,Dimensions,SafeAreaView,
        TouchableOpacity,StyleSheet,Modal,FlatList, SectionList,Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import Allassets from './Insideprofile/Allassets';


export default function Explore  ()  { 



  return(

 

       <LinearGradient colors={['#E0FFFF','#87CEFA']} style={styles.container}  > 
      
        
              <SafeAreaView>
               
                  
                      <FlatList 
                      data={Allassets}
                      style={styles.ftcontainer}
                      renderItem = {({ item }) => ( 
                      <View>
                      
                      <Image style={styles.itemstyle}  source={item.img} />
                      <Text style={styles.label}>Location: {item.title} </Text>
                      </View>
                      )}
                      keyExtractor={item => item.id}
                 
                    />

               </SafeAreaView>

                       
           
             
     
       

     </LinearGradient>


   
  );
  

  }



const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({

  container: {
    backgroundColor:'red',
    flex:1,
        
   },
   header:{
     flex:2.5, 
     flexDirection:'row',  
    
   },
 
   navcontainer: {
    borderWidth:0.5,
    borderColor:'#333',
    flex:1,      
   },
   lowercontainer:{
     
      flex:5,

     
   },
   sidebar:{

    alignItems:'flex-start',
    justifyContent:'center',
    
  
   },
   usernav:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'22%',
    marginTop:-25, 

   },
     leftbar:{
  
      alignItems:'center',
      flexDirection:'row',
      marginLeft:'10%',

     },
    middlebar:{
     marginTop:'5%',
     flexDirection:'row',
     alignItems:'flex-start',
     justifyContent:'space-between', 
     borderBottomColor:'red',
     paddingEnd:10,
     paddingStart:10,
    },
  
    ftcontainer:{
      marginVertical: 10,
      marginTop:2,
    },
    item: {
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'space-around',
      flex: 1,
      height: Dimensions.get('window').width, // approximate a square
      margin: 1,
    },
  
    itemInvisible: {
      backgroundColor: 'transparent',
    },

    itemstyle:{
      //alignContent:'center',
      resizeMode:'cover',
      width:'100%', 
      marginBottom:10,
      marginTop:10,
      marginLeft:2,
      marginRight:2,
    
      height: Dimensions.get('window').width / 1
    },
    label:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:5,
    }

    });