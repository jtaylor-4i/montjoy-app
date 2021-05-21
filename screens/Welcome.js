import React from "react";
import { View, Text, StyleSheet, Button, Image,  } from "react-native";
import { Title } from 'react-native-paper';

import MainButton from '../components/MainButton';
import FadeInView from "../components/FadeInView";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Title style={styles.headerText}>Welcome</Title>
      </View>
	  <View>
			<Text style={{color: 'white'}}>to the</Text>
		</View>
      <View style={styles.imageContainer}>
        <FadeInView>
          <Image
            source={require("../assets/images/montjoy-vertical-200x178.png")}
			style={{marginBottom: 20}}
          />
        </FadeInView>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton onPress={() => navigation.navigate("Info")}>
			Get Started
		  </MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#031116",
  },
  headerText: {
    color: "white",
    fontSize: 24,
  },
  headerContainer: {
	width: '100%',
	height: 90,
	paddingTop: 36,
	alignItems: 'center',
  },
  imageContainer: {
    marginTop: 30,
	paddingTop: 36,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
	marginBottom: 24,
	height: '50%',
	width: '100%'
  },
  buttonContainer: {
	padding: 20,
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '100%',
  },
});

export default Welcome;
