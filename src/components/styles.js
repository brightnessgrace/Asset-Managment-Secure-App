import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get("window")


const styles = StyleSheet.create ({
container:{  
    flex:1,
    backgroundColor:'#9C7E57',
  
},

header:{
    flex:1,
    justifyContent:'flex-end',

},
footer: {
    flex:2,
    backgroundColor:'#f5f5f5',
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
   paddingHorizontal:30,
   paddingVertical:50,
},
textheader:{
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
},
form:{

    borderBottomWidth:2,
    borderBottomColor:'#05375a',
    flexDirection: 'row',
    marginTop:10,
    justifyContent:'space-between',

}, icon:{

    justifyContent:'center',
  
},
textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#ddd',

},
signIn:{
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
button: {
    alignItems: 'center',
    marginTop: 30
},

imgcontainer:{
    
    resizeMode:'contain',
    maxWidth: width,
    height:230,
    marginTop:5
        
}
});

export default styles;