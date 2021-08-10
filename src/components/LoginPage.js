
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
import ResetPassword from './ResetPassword';
import SignUpscreen from '../screens/SignUpscreen';

const Login = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


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
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}/> 

                        {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn" style={styles.icon}>
                                    <Feather 
                                    name = "check-circle"
                                    color = "#05375a"
                                    size={20}/>
                              </Animatable.View>
                              : null}

                          </View>

                          <View style={styles.form}>
                             <TextInput
                            placeholder="Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            placeholderTextColor="#05375a"
                            style={styles.textinput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}/> 
                             
                          
                             <View style={styles.icon}> 
                              <TouchableOpacity  onPress={updateSecureTextEntry}>

                               {data.secureTextEntry ?    
                                <Feather 
                              name = "eye-off"
                              color = "#05375a"
                              size={20}/> 
                              :
                              <Feather 
                                  name="eye"
                                  color="#05375a"
                                  size={20}
                              />
                              }
                              </TouchableOpacity>
                             </View> 
                          </View>
                          <View style={styles.button}>
                          <TouchableOpacity onPress = {()=> navigation.navigate('Profile')}> 
                          <LinearGradient  colors = {['#00CED1','#E0FFFF']} style={styles.signIn}>
                         
                                 <Text>Login</Text>
                          </LinearGradient>
                          </TouchableOpacity>
                        </View>
                      <View style={styles.link}>
                         
                         <TouchableOpacity onPress = {()=> navigation.navigate('ResetPassword')}>
                        <Text style = {styles.textlink}>Forgot Your Password?</Text> 
                        </TouchableOpacity>
                       
                        <TouchableOpacity onPress = {()=> navigation.navigate('SignUpscreen')}>
                        <Text style = {styles.textlink}> Register </Text>
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
          <Stack.Screen name = "ResetPassword" component={ResetPassword} options={{ headerShown: false }}/>
          <Stack.Screen name =" SignUpscreen" component={SignUpscreen} options={{ headerShown: false }}/>
      </Stack.Navigator>

    )
  }

  export default function LoginPage () {
    return(

    <Navtabs /> 
    )

   };