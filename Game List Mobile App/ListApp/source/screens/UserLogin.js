import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const UserLogin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(false);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Your name:</Text>

      <TextInput
        style={isValid ? styles.validInputStyle : styles.invalidInputStyle}
        value={username}
        onChangeText={(username) => {
          username === "/^[a-z0-9]+$/i"
            ? setIsValid(true) && setUsername(username)
            : setIsValid(false);
        }}
      ></TextInput>
      <Button
        title="Continue"
        onPress={({}) =>
          username === ""
            ? setIsValid(false)
            : navigation.navigate("Home", {
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
    alignItems: "center",
    alignContent: "center",
  },
  validInputStyle: {
    backgroundColor: "white",
    borderBottomColor: "green",
    alignSelf: "center",
    width: "60%",
    padding: 5,
    margin: 10,
  },
  invalidInputStyle: {
    backgroundColor: "red",
    alignSelf: "center",
    borderBottomColor: "red",
    width: "60%",
    padding: 5,
    margin: 10,
  },
});

export default UserLogin;
