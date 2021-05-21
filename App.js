import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import Screens from './navigation/Screen';
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from './screens/Welcome';
import InfoScreen from './screens/Info';


function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default App;
