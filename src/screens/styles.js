import { Dimensions, StyleSheet } from 'react-native';

const{height} = Dimensions.get("screen");
const height_logo = height* 0.28;

const styles = StyleSheet.create ({
container:{  
    flex:1,
    backgroundColor:'#9C7E57',
  
},
header:{
   flex:2,
   justifyContent:'center',
   alignItems:'center',
},

footer:{
   flex:1,
   backgroundColor:'#f5f5f5',
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
   paddingHorizontal:30,
   paddingVertical:50,
},
logo:{
    width: height_logo,
    height: height_logo
},signIn:{
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
},  
text: {
    color: 'grey',
    marginTop:5
},
button: {
    alignItems: 'flex-end',
    marginTop: 30
},  regfooter:{
    flex:3,
    backgroundColor:'#f5f5f5',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:30,
    paddingVertical:50,
},regheader:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-start',
}, 
radiosbutton:{
   flexDirection:"row",
},
radiolabel:{
  marginTop:10,
  color: '#05375a',
  fontWeight:"800",
},
form:{
   borderBottomWidth:2,
   borderBottomColor:'#05375a',
   flexDirection: 'row',
   marginTop:10,

},
textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#ddd',

},dropdown:{
 backgroundColor:'#f5f5f5',
}
});

export default styles;