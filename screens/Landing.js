import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  StatusBar,
  Platform,
} from "react-native";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View
          style={{ paddingTop: 20, alignItems: "center", paddingBottom: 20 }}
        >
          <Image
            source={require("../assets/images/montjoy-horizontal-200x49.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textContent}>
          If interested in learning more about Streaming. Click here
        </Text>
        <Button
          title="Learn more about streaming"
          onPress={() => navigation.navigate("Streamer")}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textContent}>
          If interested in learning more about our Dreamers. Click here
        </Text>
        <Button
          title="Learn more about dreaming"
          onPress={() => navigation.navigate("Dreamer")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
    backgroundColor: "#031116",
  },
  textContent: {
    color: "#fff",
    fontSize: 14,
  },
  header: {
    paddingTop: 10,
    marginBottom: 25,
  },
  contentContainer: {
    height: 100,
    justifyContent: "center",
    alignSelf: 'stretch',
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
  },
});
export default Landing;
