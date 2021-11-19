import React, {useEffect} from 'react';
import { Platform, View } from 'react-native';
import { styles } from './styles';
import SplashScreen from 'react-native-splash-screen'


export default function SignIn() {

useEffect(() => {
  if (Platform.OS === 'android') {
    setTimeout(() => {
      SplashScreen.hide();
    },2500) 
  } else {}
},[])

 return (
   <View style={styles.container}> 

   </View>
  );
}