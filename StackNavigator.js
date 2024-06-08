import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from './screen/ProfileScreen';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
function BottomTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
        tabBarLabel:"Home",
        headerShown: false, 
        tabBarLabelStyle:{color: "white"},
        tabBarIcon:({focused})=>{
        focused ?(<Entypo name="home" size={24} color="black" />):
        (
            <AntDesign name="home" size={24} color="black" />
        )}
        }}/>
        <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{
        tabBarLabel:"Profile",
        headerShown: false, 
        tabBarLabelStyle:{color: "white"},
        tabBarIcon:({focused})=>{
        focused ?(<Ionicons name="person" size={24} color="black" />):
        (
            <Ionicons name="person-outline" size={24} color="black" />
        )}
        }}/>
        </Tab.Navigator>
        );
    }
    const Stack = createNativeStackNavigator();
    function Navigation(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main"
                    component={BottomTabs}
                    option={{headerShown:false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            // <View><Text>gcvjhbknm</Text></View>
        );
    }
export default Navigation