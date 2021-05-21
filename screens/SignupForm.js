import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-paper";

const SignupForm = ({navigation}) => {
  const [text, setText] = React.useState("");
  return (
    <View>
      <View>
        <Text>Please Fill out the form</Text>
      </View>
      <View>
        <TextInput
          label="Email"
          value=" "
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View>
        <TextInput label="Username" value=" " />
      </View>
      <View>
        <TextInput label="Password" value=" " />
      </View>
      <View>
        <Button
          title="Submit"
          onPress={() => navigation.navigate("Landing")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
