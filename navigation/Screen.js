import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

import InfoScreen from "../screens/Info";
import LoginScreen from "../screens/Login";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import SignupScreen from "../screens/SignupForm";
import ViewerScreen from "../screens/Viewer";
import WelcomeScreen from "../screens/Welcome";
import DreamerInformationScreen from "../screens/DreamerInformation";
import StreamerInformationScreen from "../screens/StreamerInformation";
import LandingScreen from "../screens/Landing";

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StreamerStack = createStackNavigator();
const DreamerStack = createStackNavigator();


// const DreamerStackScreen = () => {
//     <DreamerStack.Navigator>
//         <DreamerStack.Screen name="Streamer" component={StreamerInformationScreen} />
//         <DreamerStack.Screen name="Dreamer" component={DreamerInformationScreen} />
//     </DreamerStack.Navigator>
// }

// const StreamerStackScreen = () => {
//     <StreamerStack.Navigator>
//         <StreamerStack.Screen name="Streamer" component={StreamerInformationScreen} />
//         <StreamerStack.Screen name="Dreamer" component={DreamerInformationScreen} />
//     </StreamerStack.Navigator>
// }

// const TabNavigator = () => {
//   return (
//     <TabNavigator.Navigator>
//       <TabNavigator.Screen name="Streamer" component={StreamerStackScreen} />
//       <TabNavigator.Screen name="Dreamer" component={DreamerStackScreen} />
//     </TabNavigator.Navigator>
//   );
// };


const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Welcome" component={WelcomeScreen} />
      <AppStack.Screen name="Info" component={InfoScreen} />
      <AppStack.Screen name="Signup" component={SignupScreen} />
      <AppStack.Screen name="Landing" component={LandingScreen} />
      <AppStack.Screen name="Dreamer" component={DreamerInformationScreen} />
      <AppStack.Screen name="Streamer" component={StreamerInformationScreen} />
    </AppStack.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
