import React, { useState } from 'react';
import { View,Text,Image,Dimensions,SafeAreaView,
        TouchableOpacity,StyleSheet,Modal,FlatList } from 'react-native';
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




const Menuexplore = ({navigation}) =>{

    const [modalOpen, setModalOpen] = useState(false);
    const [tabOpen, setTabOpen] = useState(false);
   
   
    const renderItem = ({item}) => (
    
      <Item img={item.img} />
   
     );

    return(
       
        <LinearGradient
          colors={['#E0FFFF','#87CEFA']}
            style={styles.container}  > 
           
                  
               <Modal visible={modalOpen} 
                     animationType='slide' 
                     transparent={true}>

                          <TouchableOpacity  onPressOut={() => setModalOpen(false)}>  
              
                <LinearGradient
                       colors={['#E0FFFF','#87CEFA']} 
                       style={styles.modalView}>
                    <View style={styles.headstyle}>
                        
                            <View style={styles.list}> 
                            <FontAwesome5  name = "laptop-house" color= "#05375a" size={20} /> 
                            <Text> Current Asset </Text> 
                            </View>

                            <View style={styles.list}> 
                            <FontAwesome5  name = "laptop-house" color= "#05375a" size={20} /> 
                            <Text> Non Current Asset </Text> 
                            </View>

                            <View style={styles.list}> 
                            <FontAwesome5  name = "user-edit" color= "#05375a" size={20} /> 
                            <Text> Edit Profile </Text> 
                            </View>
                    </View>

                  
                    </LinearGradient>
                    </TouchableOpacity> 
                </Modal>
           
               
                <Modal visible={tabOpen} 
                     animationType='slide' 
                     transparent={true}>

                  <TouchableOpacity  onPressOut={() => setTabOpen(false)}>         
                        <LinearGradient
                            colors={['#E0FFFF','#87CEFA']} 
                            style={styles.tabone}>
                             <SafeAreaView >
                                <FlatList
                                  data={Assets}
                                  renderItem={renderItem}
                                  keyExtractor={item => item.id}
                                />
                              </SafeAreaView>
                            </LinearGradient>

                            </TouchableOpacity>   
                </Modal>
              

      <View style={styles.dp}>    
        <EvilIcons name="user" size={100} color="#808080" />
       </View> 

            <View style={styles.subcontainer}> 
                        
                                <AntDesign 
                                  name = "bars"
                                  color = "#333"
                                  size={35} 
                                  onPress={() => setModalOpen(true)}
                                />

                  <View style={{flexDirection: 'row', width: 80,  justifyContent: 'space-between'}}>
                
                      <AntDesign name="bells" size={28} color="05375a" />
                      <AntDesign name="search1" size={28} color="#05375a" />
                    
                  </View>

            </View>

            
                    <View
                            style={{
                              marginTop:10,
                              borderBottomColor: '#05375a',
                              borderBottomWidth: 0.8,
                            }}
                            />
                    <View style={styles.bottomlist}>

                     
                <MaterialIcons name="my-library-books" color={'#05375a'} size={28}  onPress={()=>navigation.navigate('Assetmodal')}/>   
                <Ionicons name="pricetags-outline" color={'#05375a'} size={28}   onPress={() => setTabOpen(true)}/>
                <AntDesign name="folderopen" size={28} color="#05375a" onPress={() => setTabOpen(true)}/>
                <AntDesign name="folder1" size={28} color="#05375a" onPress={() => setTabOpen(true)}/>
                  
                      </View> 

                          <View
                            style={{
                              marginTop:10,
                              borderBottomColor: '#05375a',
                              borderBottomWidth: 0.8,
                            }}
                            />       

                         </LinearGradient>
                        
                         );

}


const Item = ({ img }) => (


  <View>
     <Text> {Assets.title}</Text>
     <Image style={styles.uploads}
       
       source={img}
     />
 
    
    
  </View>
);

const Assetmodal = () => {

  const renderItems = ({item}) => (
    
    <Item img={item.img} />
 
   );
   return (
  
        <SafeAreaView style = {styles.flatstyle} >
        <FlatList
          data={Assets}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
</SafeAreaView>

   );
}

const Tab = createStackNavigator();

const Navtabs =()=>{
    return (
      
      <Tab.Navigator  initialRouteName="Home">
          <Tab.Screen name ="Home" component={Menuexplore} options={{ headerShown: false }}/>
          <Tab.Screen name ="Menubar" component={Barcategories} options={{ headerShown: false }}/>
          <Tab.Screen name ="Library" component={Library} options={{ headerShown: false }}/>
          <Tab.Screen name ="Assetmodal" component={Assetmodal} options={{ headerShown: false }}/>
         
      </Tab.Navigator>

    )
  }

  export default function Explore () {
    return(

    <Navtabs /> 
    )

   };
   
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F5F5F5',
      flex:1,
          
     },
     subcontainer:{
         
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
     },
     dp:{
        
       alignItems:'center',
       marginTop:5,
     
      },

      imgcontainer:{
        resizeMode:'contain',
        maxWidth: width*0.5,
        marginTop:-210,

      },

     lable:{
        color: '#696969',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
     },
    list:{
          marginTop:30,
          marginLeft:20,
          flexDirection:'row',
     

     },

     bottomlist:{
      marginTop:10,
      marginLeft:20,
      justifyContent: 'space-between',
      flexDirection:'row',
 
     },
     modalView: {

    
        height:'100%',
        marginTop:55,
        width:'80%',
        borderTopRightRadius: 20,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },},

    tabone:{
     
        height:'65%',
        marginTop:'44%',
        width:'100%',
        alignItems: "flex-start",
        flexDirection:"row",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, },
        
        uploads:{
          width:width*0.25,
          height:width*0.24,
          marginLeft:2,
          marginTop:'-17%',
         
       },
       flatstyle:{
         backgroundColor:'red',
         marginTop:'50%',



       }
    });