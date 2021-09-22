import React from 'react';
import {View,SafeAreaView,Text,TouchableOpacity,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';


const Barcategories = ()=>{

     return(
          
        <LinearGradient    colors={['#f5f5f5','#00CED1']} style={styles.menubar}>
              <Modal  animationType="slide" visible={true} transparent={true}>
                 <View style={{backgroundColor:"#000000aa", flex:1}}> 
                 <View style={{backgroundColor:"#ffffff", flex:1}}> 
                     <Text>
                         hello
                  </Text> 
                  </View> 
                  </View> 
                  </Modal>

        </LinearGradient>

     );


}



export default Barcategories;