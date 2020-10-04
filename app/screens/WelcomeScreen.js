import React from 'react';
import { Image, ImageBackground,StyleSheet ,Text,View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}
       >   
      
           <Image
           source={require('../assets/logo-red.png')}
           style={styles.logo}
           />
           <Text style={{
               color:'#AE1438',
               position:'absolute',
               top:170,
               alignSelf:"center"
              }}>
            Sell the thing's you don't need
           </Text>
        
         <View
           style={styles.loginButton}
           ></View>
           <View
           style={styles.registerButton}
           ></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end'
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:70,
        alignSelf:"center"
    },
    loginButton:{
     width:'100%',
     height:70,
     backgroundColor:'#6AB04A'
    },
    registerButton:{
        width:'100%',
        height:70,
      backgroundColor:'#0ABDE3'
    }
})
export default WelcomeScreen;