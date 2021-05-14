import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


//screens

import WelcomeScreen from '../screens/Welcome';
import HomeScreen from '../screens/Home';
import MapScreen from '../screens/Map';
//import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import SignupScreen from '../screens/SignupForm';
import { withTheme } from 'react-native-paper';
import CameraScreen from '../components/Camera';


const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();


const WelcomeStack=createStackNavigator();
const SignupStack=createStackNavigator();

const WelcomeNav=() => {
	
	return (
		<WelcomeStack.Navigator 
			initialRouteName="Welcome"
			screenOptions={{				
				headerTruncatedBackTitle: true,
				headerBackTitleVisible: false,
				headerTitle: false,														
			}}>			
			<Stack.Screen 
				name="Welcome" 
				component={ WelcomeScreen } 
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen name="SignupScreen" 
				component={ SignupScreen } 
				options={{
					headerShown: true
				}}
			/>
			<Stack.Screen name="HomeScreen" component={ HomeScreen } />
			<Stack.Screen name="MapScreen" 
				component={ MapScreen } 
				options={{
				}}
				/>
			<Stack.Screen name="CameraScreen" component={CameraScreen} />

		</WelcomeStack.Navigator>
	)
}

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="CameraScreen" component={CameraScreen} />
			<Stack.Screen name="MapScreen" component={MapScreen} />
		</Stack.Navigator>
	)
}

export default WelcomeNav;
