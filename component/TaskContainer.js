import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const TaskContainer = (props) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{props.props}</Text>



      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 40,
        borderRadius: 10,
      backgroundColor: '#abcabc',
      marginTop: 15,
    },
    text: {
        paddingTop: 6,
      fontSize: 15,
    },
  });

export default TaskContainer