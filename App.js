import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';

export default function App() {  

  const backgroundImage = {uri: 'https://res.cloudinary.com/dlj1sbbtb/image/upload/v1629459599/background_hjbriw.jpg'};
  const logo = {uri: 'https://res.cloudinary.com/dlj1sbbtb/image/upload/v1629461369/logo-red_ibxvni.png'};

  return (
    <View style={styles.container}>
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.blocks}>
        <View style={styles.redBlock}></View>
        <View style={styles.blueBlock}></View>
      </View>

    </ImageBackground>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  logo: {
    width: 100,
    height: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  blocks:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  redBlock: {
    backgroundColor: '#fc5c65',
    width: '100%',
    height: 70,
  },
  blueBlock: {
    backgroundColor: '#4ECDC4',
    alignItems: 'flex-end',
    width: '100%',
    height: 70,
  },
});
