import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Welcome, {username}</Text>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() =>
          navigation.navigate("List", {
            username: username,
          })
        }
      >
        <Text style={styles.touchTextStyle}>Go to the List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    color: "turquoise",
    alignSelf: "center",
    fontFamily: "Avenir",
  },
  touchTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    margin: 20,
    color: "white",
  },
  viewStyle: {
    backgroundColor: "black",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  touchableStyle: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
