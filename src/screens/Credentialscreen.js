import React from 'react';
import styles from './styles';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import Profile from '../components/Profile';
import Feather from 'react-native-vector-icons/Feather';
import Navigation from '../components/navigation';


const Credentialform = ({navigation}) =>{

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

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

    let secretqn = [{
        value: 'Mother Midane Name',
       },{
        value: 'Favourite Country ',
    },
    {
        value: 'Father Midane Name',
    }, {
        value: 'Favourite Color',
}];

    return(
        <LinearGradient
         colors={['#f5f5f5','#00CED1']}
           style={styles.container}>
                <View style={styles.regheader}>
                         <Text style={styles.title}>Create Login Credentials</Text>
                         </View>
                         <Animatable.View animation="fadeInUpBig" style={styles.regfooter}>
                         <View style={styles.form}>
            <TextInput
                          placeholder="Username"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/> 
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


                           <View style={styles.form}>
                            <TextInput
                          placeholder="Confirm Password"
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

                <View>
                   <Dropdown style={styles.dropdown}
                    label='Secreate Question'
                    icon='chevron-down'
                    iconColor='#E1E1E1'
                    data={secretqn} />

                 </View>
                           <View style={styles.form}>
            <TextInput
                          placeholder="Secreat Ans"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/>
                           </View>

            <TouchableOpacity onPress={() => navigation.navigate('Navigation')}>
                 <View style={styles.button}>
                    <LinearGradient
                     colors={['#f5f5f5','#00CED1']}
                     style={styles.signIn}>
                      <Text>Save</Text>
        

                    </LinearGradient>

                 </View>
                 </TouchableOpacity>
                             </Animatable.View>
           
          </LinearGradient>
    );

}

const Tabs = createStackNavigator();


const Credentialscreen =()=>{
     return (
 
       <Tabs.Navigator  initialRouteName="Home">
           <Tabs.Screen name ="Home" component={Credentialform} options={{ headerShown: false }}/>
    
           <Tabs.Screen name ="Navigation" component={Navigation} options={{ headerShown: false }}/>
       </Tabs.Navigator>
  
     )
   }

export default  Credentialscreen