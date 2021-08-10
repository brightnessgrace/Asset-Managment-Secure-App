
import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from './styles';
import Navigation from '../components/navigation';
import Feather from 'react-native-vector-icons/Feather';

const Login = ({navigation}) => {

  return(
     
      <LinearGradient 
                colors = {['#f5f5f5','#00CED1']}
                style={styles.container}
        >

          <View style={styles.header}>
                <Text style = {styles.textheader}> Welcome </Text>
                </View> 

             <Animatable.View 
                    animation="fadeInUpBig"
                     style={styles.footer}>

                        <View style={styles.form}>

                            <TextInput
                            placeholder="Username/Email"
                            placeholderTextColor="#05375a"
                            style={styles.textinput}
                            autoCapitalize="none"/> 
                             <View style={styles.icon}>
                                    <Feather 
                                    name = "check-circle"
                                    color = "#05375a"
                                    size={20}/>
                              </View>

                          </View>

                          <View style={styles.form}>
                             <TextInput
                            placeholder="Password"
                            placeholderTextColor="#05375a"
                            style={styles.textinput}
                            autoCapitalize="none"/> 
                             
                          
                             <View style={styles.icon}> 
                                <Feather 
                              name = "eye-off"
                              color = "#05375a"
                              size={20}/> 
                             </View>
                          </View>
                          <View style={styles.button}>
                          <TouchableOpacity onPress = {()=> navigation.navigate('Profile')}> 
                          <LinearGradient  colors = {['#00CED1','#E0FFFF']} style={styles.signIn}>
                         
                                 <Text>Login</Text>
                          </LinearGradient>
                          </TouchableOpacity>
                        </View>


                   </Animatable.View>


      </LinearGradient>


  );


}

const Stack = createStackNavigator();

const Navtabs =()=>{
    return (
      
      <Stack.Navigator  initialRouteName="Home">
          <Stack.Screen name ="Home" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name ="Profile" component={Navigation} options={{ headerShown: false }}/>
                   
      </Stack.Navigator>

    )
  }

  export default function LoginPage () {
    return(

    <Navtabs /> 
    )

   };