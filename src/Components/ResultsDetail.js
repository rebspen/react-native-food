import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text>
        {result.rating} stars , {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom:5
  },
});

export default ResultsDetail;
