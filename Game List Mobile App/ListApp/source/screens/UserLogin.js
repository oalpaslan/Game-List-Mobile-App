import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const UserLogin = ({ navigation }) => {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Your name:</Text>
      <TextInput
        style={styles.inputStyle}
        value={username}
        onChangeText={setUsername}
      />
      <Button
        title="Continue"
        onPress={({}) =>
          navigation.navigate("Home", {
            username: username,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
  viewStyle: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
  },
  inputStyle: {
    backgroundColor: "white",
    alignSelf: "center",
    width: "60%",
    padding: 5,
    margin: 10,
  },
});

export default UserLogin;
