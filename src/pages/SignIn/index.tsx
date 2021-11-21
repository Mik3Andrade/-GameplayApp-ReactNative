import React, {useEffect, useState} from 'react';
import {
  Platform,
  View,
  StatusBar,
  TextInput,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import SplashScreen from 'react-native-splash-screen';
import {ButtonIcon} from '../../components/ButtonIcon/';

export default function SignIn() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2500);
    } else {
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0b1137" barStyle="light-content" />
      <View style={styles.imagePlayerContainer}>
        <Image
          style={styles.playerFighter}
          source={require('../../assets/player-fighter.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Conecte-se {`\n`}e organize suas {`\n`} jogatinas
        </Text>
        <Text style={styles.textSubtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </SafeAreaView>
  );
}
