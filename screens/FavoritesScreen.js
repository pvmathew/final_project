import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import Constants from "expo-constants";
import Row from "../components/Row";

import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import { connect } from "react-redux";
import { removeFavorite, fetchTrending } from "../redux/actions";
import Ionicons from "react-native-vector-icons/Ionicons";

const FavoritesScreen = (props) => {
  useEffect(() => {
    console.log(props.favoritesList);
  }, [props.favoritesList]);

  let favoriteRows = Object.keys(props.favoritesList).map((key, index) => (
    <View style={styles.favoritesRow}>
      <TouchableOpacity
        style={styles.recipeContainer}
        onPress={() =>
          props.navigation.navigate("Recipe", props.favoritesList[key])
        }
      >
        <Image
          source={{ uri: props.favoritesList[key].img }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginRight: 10,
          }}
        ></Image>
        <Text>{props.favoritesList[key].title}</Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() =>
            Share.share({
              message:
                props.favoritesList[key].title +
                ": " +
                props.favoritesList[key].url,
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
          <Ionicons
            name="md-share"
            size={25}
            color="gray"
            style={styles.removeIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => {
            let title = props.favoritesList[key].title;
            props.removeFavorite(Firebase.auth().currentUser.uid, key, title);
            props.fetchTrending();
          }}
        >
          <Ionicons
            name="ios-remove-circle"
            size={25}
            color="#ff0000"
            style={styles.removeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>{favoriteRows}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: Constants.statusBarHeight,
  },
  placeholder: {
    textAlign: "center",
    color: "#fff",
  },
  favoritesRow: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttons: {
    marginLeft: "auto",
    borderLeftWidth: 1,
    borderColor: "gray",
    paddingLeft: 15,
    flexDirection: "row",
  },
  removeButton: {
    marginLeft: 15,
    marginRight: 5,
  },
  recipeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({ favoritesList: state.favorites });

export default connect(mapStateToProps, { removeFavorite, fetchTrending })(
  FavoritesScreen
);
