import React, { useState } from 'react';
import { View,Text,Image,Dimensions,SafeAreaView,
        TouchableOpacity,StyleSheet,Modal,FlatList, SectionList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Barcategories from './Barcategories';
import Library from './Library';
import Assets from './Insideprofile/Assets';
import { Component } from 'react';


const Item = ({ img }) => (


  <View>
     
     <Text> {Assets.title}</Text>
      <Image style={styles.uploads}
       
       source={img}
     />
 
    
    
  </View>
);

// determine number of full rows to display
const formatData =(data,numColumns) => {

  const numberofFulRows = Math.floor(data.length /numColumns);
  // determine the number of elements actualy exist in the last row

  let numberOfElementsLastRow = data.length - (numberofFulRows * numColumns);
  while (numberOfElementsLastRow !== numColumns &&  numberOfElementsLastRow !== 0) {
    // determine the number of full rows
    data.push({ key:  `blank-${numberOfElementsLastRow}`, empty:true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }
  return data;
};



const numColumns = 3;


export default class Explore extends Component {



   renderItems = ({item}) => {
    // IF NOTHINH TO RETURN THEN INVISIBLE
    
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return (
      <View style={styles.item}>
 
        <Image style={styles.itemstyle} 
       
           source={item.img}
        />
       </View>
      );

 
      };
render() {
  return(

    <LinearGradient colors={['#E0FFFF','#87CEFA']} style={styles.container}  > 
      
      <View style={styles.header}>
          
      
       <View style={styles.sidebar}> 
                <AntDesign name = "bars" color = "#333" size={40} />                
           </View>

            

           <View style={styles.usernav}>   
             <EvilIcons name="user" size={140} color="#808080" />
          </View>

          <View style={styles.leftbar}>
                
                <AntDesign name="bells" size={35} color="#333" style={{paddingRight:'5%'}}/>
                   <AntDesign name="search1" size={35} color="#333" />
           
        </View> 

       </View>
        
        <View style={styles.navcontainer}>

              <View style={styles.middlebar}>
                <MaterialIcons name="my-library-books" color={'#05375a'} size={35} onPress={() => setTabOpen(true)}/>   
                <Ionicons name="pricetags-outline" color={'#05375a'} size={35} onPress={() => setTabOpen(true)}/>
                <AntDesign name="folderopen" size={35} color="#05375a" onPress={() => setTabOpen(true)}/>
                <AntDesign name="folder1" size={35} color="#05375a" onPress={() => setTabOpen(true)}/>
              </View>
             
      </View>

      <View style={styles.lowercontainer}>
         
              <SafeAreaView>
                
                <FlatList 
                   data={formatData(Assets, numColumns)}
                   style={styles.ftcontainer}
                   renderItem={this.renderItems}
                   numColumns={numColumns}
                 />
   
              </SafeAreaView>
           
      </View>
       

   </LinearGradient>

   
  );
  

  }
};



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
      marginVertical: 20,
      marginTop:2,
    },
    item: {
      //backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'space-around',
      flex: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square
      margin: 2,
    },
  
    itemInvisible: {
      backgroundColor: 'transparent',
    },

    itemstyle:{
      //alignContent:'center',
      marginBottom: 5,
      marginRight: 10,
      marginStart:5,
      resizeMode:'cover',
      width:130, 
      height: Dimensions.get('window').width / numColumns
    }

    });