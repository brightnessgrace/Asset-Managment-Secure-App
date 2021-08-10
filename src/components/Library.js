import React from 'react';
import { View,Image,Text,ScrollView } from 'react-native';

const assetone =  require('../../assets/data/images/ilazoone.jpeg');
const assettwo =  require('../../assets/data/images/ilazooneb.jpeg');
const assetthree = require('../../assets/data/images/ilazoonec.jpeg');
const assetfour =  require('../../assets/data/images/kisasaone.jpeg');
const assetsix =  require('../../assets/data/images/kiasaoneb.jpeg');
const assetfive =  require('../../assets/data/images/kisasaonec.jpeg');
import styles from './styles';

const Library =()=>{

     return(
        <ScrollView>
        <View >
            
            <Image source={assetone} style={styles.imgcontainer} />
            <Text>Ilazo  Site One</Text>
            <Image source={assettwo} style={styles.imgcontainer}/>
            <Text>Ilazo  Site Two</Text>
            <Image source={assetthree} style={styles.imgcontainer}/>
            <Text>Ilazo  Site Three</Text>
            <Image source={assetfour} style={styles.imgcontainer}/>
            <Text>Ilazo  Site Four</Text>
            <Image source={assetfive} style={styles.imgcontainer}/>
            <Text>Ilazo  Site Five</Text>
            <Image source={assetsix} style={styles.imgcontainer}/>
            <Text>Ilazo  Site Six</Text>
              
        </View>

    </ScrollView>
     )
  

}

export default Library;