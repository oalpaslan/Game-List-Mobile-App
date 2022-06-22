import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GameDetail = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={}>
      <Image style={styles.imgStyle} source={{ uri: props.imageSource }} />
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.platformStyle}>{props.platform}</Text>
      <Text style={styles.scoreStyle}>{props.score}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 200,
  },
  titleStyle: {
    color: "white",
    fontSize: 20,
  },
  platformStyle: {
    color: "white",
  },
  scoreStyle: {
    color: "white",
    marginBottom: 10,
  },
});
export default GameDetail;
