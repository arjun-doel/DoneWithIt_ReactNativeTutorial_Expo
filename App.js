import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Image, Button, SafeAreaView } from 'react-native';
import iconImage from './assets/icon.png'

export default function App() {
  

  const test = {
    title: 'this is a title'
  }

  const handlePress = () => console.log('text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>{test.title}</Text>
      <Image source={iconImage} style={styles.img_icon}/>
      <TouchableHighlight onPress={handlePress}>
        <Image source={{ uri: 'https://res.cloudinary.com/dlj1sbbtb/image/upload/v1625580751/puppy-4484296_1920_tj3rqw.jpg'}} style={styles.img_icon}/>
      </TouchableHighlight>
      <Button 
        title="Hi" 
        color="red"
        onPress={() => alert('sup')}
        
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: 100,
  },
  img_icon: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 20,
  }
});
