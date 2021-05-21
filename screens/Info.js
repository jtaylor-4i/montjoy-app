import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import CarouselCards from "../components/CarouselCards";

const Info = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <View style={{marginBottom: 10}}>
        <CarouselCards />
        <View style={styles.resultContainer}>
         <Button 
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
         />
       </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#031116",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  imageContainer: {
    height: "85%",
  },
  infoText: {
    fontSize: 18,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    color: "#fff",
  },
});

export default Info;
