import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import colors from '../config/colors'

const ViewImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
    borderRadius: 10,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  }
})

export default ViewImage
