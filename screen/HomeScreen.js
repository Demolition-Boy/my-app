import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Navigation from '../StackNavigator'

const navigation = () => {

  Navigation.navigate('ProfileScreen')
}

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity   style = {{width: 205, height: 40, borderRadius: 10, backgroundColor:'#b4a7c6' }}onPress ={()=> {
      }}></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})