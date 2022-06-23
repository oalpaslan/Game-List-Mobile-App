import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import GameDetail from "../components/GameDetail";

const ListScreen = ({ route }) => {
  const games = require("../../assets/game_details.json");
  const { username } = route.params;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.usernameStyle}>{username}</Text>
      <FlatList
        data={games}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => {
          return (
            <GameDetail
              style={styles.detailStyle}
              title={item.name}
              platform={"Platform: " + item.platform}
              score={"Metascore: " + item.score}
              imageSource={item.image}
              userRating
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameStyle: {
    color: "white",
    fontSize: 20,
    margin: 15,
    alignSelf: "flex-end",
  },
  viewStyle: {
    backgroundColor: "black",
  },
  textStyle: { fontSize: 30, alignSelf: "center", margin: 20 },
  detailStyle: {
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default ListScreen;
