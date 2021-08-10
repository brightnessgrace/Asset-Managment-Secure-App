import React ,{ useState } from 'react';
import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { RadioButton } from 'react-native-paper';
import styles from './styles';

import Credentialscreen  from './Credentialscreen';

const Formscreen =({navigation})=>{


    const   [checked, setChecked] = useState();

    return (
        <LinearGradient
         colors={['#f5f5f5','#00CED1']}
            style={styles.container}>
            <View style={styles.regheader}>
                         <Text style={styles.title}>Registration</Text>
                         </View>
             <Animatable.View animation="fadeInUpBig" style={styles.regfooter}>
                 
            
                <View style={styles.form}>
                
                  
            <TextInput
                          placeholder="Your First Name"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/> 
                          </View>
                             <View style={styles.form}>
            <TextInput
                          placeholder="Last Name"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/>
                           </View>
                             <View style={styles.form}>
                        <TextInput
                          placeholder="PhoneNumber"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/> 
                          </View>
                             <View style={styles.form}>
                               <TextInput
                          placeholder="EmailAddress"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/>       
                 </View>
                 
                 <View style={styles.radiosbutton}>
                     
                     <RadioButton
                           value="Supplier"
                           color="#05375a"
                           status={ checked === 'Supplier' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('Supplier')}
                              /><Text style={styles.radiolabel}> Supplier</Text>
                        <RadioButton
                           value="Consumer"
                           color="#05375a"
                           status={ checked === 'Consumer' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('Consumer')}
                              /><Text style={styles.radiolabel}> Consumer </Text>
                     <RadioButton
                           value="Both"
                           color="#05375a"
                           status={ checked === 'Both' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('Both')}
                              /><Text style={styles.radiolabel}> Both </Text>
                     </View>
              
               
                 <TouchableOpacity onPress={() => navigation.navigate('Credentialscreen')}>
                 <View style={styles.button}>
                    <LinearGradient
                     colors={['#f5f5f5','#00CED1']}
                     style={styles.signIn}>
                      <Text>Submit</Text>
        

                    </LinearGradient>

                 </View>
                 </TouchableOpacity>
              </Animatable.View>
        
         </LinearGradient> 
    );

}

const Tab = createStackNavigator();


const SignInscreen =()=>{
     return (
 
       <Tab.Navigator  initialRouteName="Home">
           <Tab.Screen name ="Home" component={Formscreen} options={{ headerShown: false }}/>
           <Tab.Screen name ="Credentialscreen" component={Credentialscreen} options={{ headerShown: false }}/>
           
       </Tab.Navigator>
  
     )
   }

export default SignInscreen;