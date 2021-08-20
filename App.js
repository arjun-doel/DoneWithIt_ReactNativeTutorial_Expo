import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

export default function App() {  

  const backgroundImage = 'https://res.cloudinary.com/dlj1sbbtb/image/upload/v1629459599/background_hjbriw.jpg';

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage}>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: '',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: 100,
  },
});
