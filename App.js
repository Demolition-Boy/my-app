import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './StackNavigator'
import HomeScreen from './screen/HomeScreen';

export default function App() {
  return (
    <>
    <SafeAreaView style = {styles.container}>
    <HomeScreen></HomeScreen>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
