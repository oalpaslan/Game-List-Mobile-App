import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import GameDetail from "../components/GameDetail";
import Images from "../components/Images";
const ListScreen = () => {
  const games = require("../../assets/game_details.json");

  return (
    <View style={styles.viewStyle}>
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
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
