import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput, Title } from "react-native-paper";

const SignupForm = ({ navigation }) => {
  const [text, setText] = React.useState("");
  return (
    <View>
      <View>
        <Title>Please Fill out the form</Title>
      </View>
      <View>
        <TextInput
          label="First Name"
          value=""
          mode="outlined"
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View>
        <TextInput
          label="Last Name"
          value=""
          mode="outlined"
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View>
        <TextInput
          label="Email"
          value=""
          mode="outlined"
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View>
        <TextInput
          label="Create Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          mode="outlined"
        />
      </View>
      <View>
        <TextInput
          label="Confirm Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          mode="outlined"
        />
      </View>
      <View>
        <Button title="Submit" onPress={() => navigation.navigate("Landing")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
