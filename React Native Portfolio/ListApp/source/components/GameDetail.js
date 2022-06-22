import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GameDetail = (props) => {
  return (
    <View style={props.style}>
      <Image style={styles.imgStyle} source={{ uri: props.imageSource }} />
      <TouchableOpacity style={props.style}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.platformStyle}>{props.platform}</Text>
        <Text style={styles.scoreStyle}>{props.score}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 200,
  },
  titleStyle: {
    color: "turquoise",
    fontSize: 20,
    fontFamily: "Avenir",
  },
  platformStyle: {
    color: "white",
    fontFamily: "Avenir",
  },
  scoreStyle: {
    color: "white",
    marginBottom: 20,
    fontFamily: "Avenir",
  },
});
export default GameDetail;
