import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";

const TrendingItem = (props) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.log("pressed!")}
  >
    <Image
      source={{
        uri:
          "https://www.edamam.com/web-img/963/963d9b449da917aa40ac6df01672baa9.jpg",
      }}
      style={styles.image}
    />
    <Text>Baked Hawaii</Text>
    <View styles={styles.bottomContainer}>
      <Text>Likes: </Text>
      <TouchableOpacity>
        <Text>Share!</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: "auto",
    minHeight: 80,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    alignItems: "center",
    padding: 15,
  },
  image: { height: 200, width: 200, borderRadius: 120 },
  bottomContainer: {
    flexDirection: "row",
  },
});

export default TrendingItem;
