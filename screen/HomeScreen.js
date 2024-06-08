import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TaskContainer from '../component/TaskContainer';

const HomeScreen = () => {
  const [task, setTask] =  useState('');
  const [taskList, setTaskList] = useState([]);

  const setTaskListFunc = ()=>{
    setTask('')
    setTaskList([...taskList, task])
  }
  const deleteItem =(index)=>{
   let newList =  [...taskList];
   newList.splice(index,1);
   setTaskList(newList);
  }

  return (
    console.log(taskList),
    <View style = {styles.container}>
      <Text style = {styles.text}> To Do List</Text>
      <View>
        { taskList.map((item,index)=>{
          return(
            <TouchableOpacity onPress={()=>{deleteItem(index)}}>
                  <TaskContainer key={index} props={item}>
        </TaskContainer>
        </TouchableOpacity >
          )
        })

}
      </View>
      <KeyboardAvoidingView style={styles.bottomView}>
      <View  style={styles.inputView}>
        <TextInput  style={styles.inputText} value={task} placeholder=' enter your task here' onChangeText={val=>setTask(val)}></TextInput>
      </View>
      <View>
      <TouchableOpacity style={styles.addTask} onPress={()=>{
        setTaskListFunc()
      }}>
          <Text>Add Task</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 45,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 30,
  },
  inputView: {
    borderRadius: 20,
    height: 40,
    width: 300,
    borderColor: '#c4c4c4',
    backgroundColor: '#c2c2c2',
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    height: 40,
    width: '100%',
  },
  inputText: {
    borderRadius: 10,
    height: 40,
    width: 200,
    borderColor: '#c4c4c4',
  },
  addTask: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default HomeScreen
