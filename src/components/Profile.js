import React from 'react';
import styles from './styles';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




const Profile = () =>{

    return(
        <LinearGradient
        colors={['#f5f5f5','#00CED1']}
           style={styles.container}>
                <View style={styles.regheader}>
                         <Text style={styles.title}>Home</Text>
                         </View>
                         </LinearGradient>
                         );

}

export default Profile;