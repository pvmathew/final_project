import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Share,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TrendingItem = (props) => (
  <View
    style={styles.container}
  >
    <TouchableOpacity
      onPress={() => props.navigate("Recipe", { title: props.name, ...props.meta })}
    >
      <Image
        source={{
          uri: props.meta.img,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.subname}>{props.meta.source}</Text>
    <View style={styles.bottomContainer}>
      <View style={styles.favoriteContainer}>
        <Ionicons
          name="ios-star"
          size={25}
          color="gray"
          style={styles.shareIcon}
        />
        <Text style={styles.favoriteText}>{props.meta.favoriteCount}</Text>
      </View>

      <TouchableOpacity
        style={styles.shareButton}
        onPress={() =>
          Share.share({
            message: props.name + ": " + props.meta.url,
          }).then((res) => {
            if (res.action === Share.sharedAction) {
              if (res.activityType) {
              } else {
                // shared
              }
            } else if (res.action === Share.dismissedAction) {
              // dismissed
            }
          })
        }
      >
        <Text style={styles.shareText}></Text>
        <Ionicons
          name="md-share"
          size={25}
          color="#fff"
          style={styles.shareIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // width: "auto",
    // minHeight: 80,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    alignItems: "center",
    paddingTop: 15,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: "#008080",
  },
  name: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  subname: { fontSize: 12, marginBottom: 10 },
  bottomContainer: {
    flexDirection: "row",
    // borderTopWidth: 1,
    width: "100%",
    borderColor: "gray",
    justifyContent: "space-between",
    padding: 5,
  },
  favoriteContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: "gray",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  favoriteText: {
    textAlign: "center",
    margin: 5,
  },
  shareButton: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "gray",
    borderRadius: 10,
    backgroundColor: "#008080",
    // margin: 5,
  },
  shareText: {
    paddingVertical: 10,
  },
  shareIcon: {
    marginLeft: 5,
  },
});

export default TrendingItem;
