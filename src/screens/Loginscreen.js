import React from 'react';
import { SafeAreaView,Text,View,Image,TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import SignUpscreen from './SignUpscreen';
import LoginPage from '../components/LoginPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const prologo =  require('../../assets/image/preorder.png');



const Register = ({navigation}) =>{

     return (
           
     
          <LinearGradient
                            colors={['#f5f5f5','#00CED1']}
                            style={styles.container}>
            <View style={styles.header}>
                <Image
                  animation="bounceIn"  
                  source={prologo}
                  style={styles.logo}
                  resizeMode="stretch"
                  />
                </View> 
                <Animatable.View 
                    animation="fadeInUpBig"
                     style={styles.footer}>
                  <Text style={styles.title}>Stay connected with us!</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                  <Text style={styles.text}>Sign in with account</Text>
                  </TouchableOpacity>
                  <View style={styles.button}>
                  <TouchableOpacity onPress={() => navigation.navigate('SignUpscreen')}>
                         <LinearGradient
                            colors={['#f5f5f5','#00CED1']}
                            style={styles.signIn}>
                             <Text>Get Started </Text>
                              <MaterialIcons 
                                 name="navigate-next"
                                 color="black"
                                 size={20}/>
                         </LinearGradient>

                    </TouchableOpacity>
                   </View>
                </Animatable.View>
                </LinearGradient>


     );

};

const Stack = createStackNavigator();


const Navtabs =()=>{
     return (
        <NavigationContainer>
       <Stack.Navigator  initialRouteName="Home">
           <Stack.Screen name ="Home" component={Register} options={{ headerShown: false }}/>
           <Stack.Screen name ="SignUpscreen" component={SignUpscreen} options={{ headerShown: false }}/>
           <Stack.Screen name ="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
           
       </Stack.Navigator>
       </NavigationContainer>
     )
   }

   export default function Loginscreen () {
    return(
    <Navtabs /> 
    )

   };