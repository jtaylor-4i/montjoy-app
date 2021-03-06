import React from "react";
import { StyleSheet, View, Image, ImageBackground } from 'react-native';


const playIcon = require("../assets/images/play.png");
const volumeIcon = require("../assets/images/sound.png");
const hdIcon = require("../assets/images/hd-sign.png");
const fullScreenIcon = require("../assets/images/full-screen.png");
const flower = require("../assets/images/flower.jpg");
const remoteImage = require('../assets/images/mont_soldier.png');
const Viewer = () => {
  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={remoteImage}
        style={styles.videoContainer}
        resizeMode="contain"
      >
        <View style={styles.controlsContainer}>
          <Image source={playIcon} style={styles.icon} />
          <Image source={volumeIcon} style={styles.icon} />
          <View style={styles.progress}>
            <View style={styles.progressBar} />
          </View>
          <Image source={hdIcon} style={styles.icon} />
          <Image source={fullScreenIcon} style={styles.icon} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  flower: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    backgroundColor: "#000",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  controlsContainer: {
    padding: 10,
    backgroundColor: "#202020",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 175,
  },
  icon: {
    tintColor: "#fff",
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  progress: {
    backgroundColor: "#000",
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 4,
  },
  progressBar: {
    backgroundColor: "#bf161c",
    borderRadius: 5,
    height: 10,
    margin: 2,
    paddingTop: 3,
    width: 80,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Viewer;
