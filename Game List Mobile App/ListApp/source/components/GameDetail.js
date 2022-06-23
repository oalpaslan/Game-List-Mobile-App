import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";
const GameDetail = (props) => {
  const [rating, setRating] = useState(3);
  return (
    <View style={props.style}>
      <Image style={styles.imgStyle} source={{ uri: props.imageSource }} />
      <TouchableOpacity style={props.style}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.platformStyle}>{props.platform}</Text>
        <Text style={styles.scoreStyle}>{props.score}</Text>
      </TouchableOpacity>
      <StarRating
        maxStars={5}
        rating={rating}
        fullStarColor={"yellow"}
        emptyStar={"ios-star-outline"}
        fullStar={"ios-star"}
        halfStar={"ios-star-half"}
        iconSet={"Ionicons"}
        disabled={false}
        selectedStar={setRating}
        starSize={20}
        containerStyle={styles.starStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starStyle: {
    marginBottom: 10,
  },
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
    fontFamily: "Avenir",
  },
});
export default GameDetail;
