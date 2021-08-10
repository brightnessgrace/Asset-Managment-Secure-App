import React from 'react';
import styles from './styles';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

const ResetPassword = () =>{

    let data = [{
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
                <View style={styles.header}>
                         <Text style={styles.textheader}>Reset Password</Text>
                         </View>


            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                         <View style={styles.form}>
                    <TextInput
                          placeholder="Email Address"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/> 
                          </View>
                         

                <View>
                   <Dropdown style={styles.dropdown}
                    label='What was Your Secreat Question?'
                    icon='chevron-down'
                    iconColor='#E1E1E1'
                    data={data} />

                 </View>
                           <View style={styles.form}>
            <TextInput
                          placeholder="What Was The Secreat Ans"
                          placeholderTextColor="#05375a"
                          style={styles.textinput}
                          autoCapitalize="none"/>
                           </View>

            <TouchableOpacity>
                 <View style={styles.button}>
                    <LinearGradient
                     colors={['#f5f5f5','#00CED1']}
                     style={styles.signIn}>
                      <Text>Request</Text>
        

                    </LinearGradient>

                 </View>
                 </TouchableOpacity>
                             </Animatable.View>
           
          </LinearGradient>
    );

}



export default  ResetPassword;