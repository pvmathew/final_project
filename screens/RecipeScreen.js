import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { WebView } from "react-native-webview";
import { AppLoading } from "expo";
import Firebase from "firebase";
import favorites from "../firebase/favorites";
import { connect } from "react-redux";
import { fetchFavorites, fetchTrending } from "../redux/actions";

const RecipeScreen = ({
  route,
  navigation,
  favoritesList,
  fetchFavorites,
  fetchTrending,
}) => {
  const params = route.params;

  useEffect(() => {
    let isFavorited = false;

    Object.keys(favoritesList).some((key) => {
      let favoriteName = favoritesList[key].title;
      if (favoriteName === params.label || favoriteName === params.title) {
        isFavorited = true;
        return true;
      }
      return false;
    });

    navigation.setOptions({
      title: params.title,
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            isFavorited
              ? Alert.alert("Already favorited!")
              : Alert.alert("Favorite", "Add to Favorites?", [
                  {
                    text: "Add",
                    onPress: () => {
                      let userID = Firebase.auth().currentUser.uid;
                      favorites.add(userID, params);
                      fetchFavorites(userID);
                      fetchTrending();
                    },
                  },
                  { text: "Cancel", style: "cancel" },
                ])
          }
        >
          <Ionicons
            name={isFavorited ? "ios-star" : "ios-star-outline"}
            size={25}
            color="#fff"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [favoritesList]);

  useEffect(() => {}, [navigation]);

  return <WebView source={{ uri: params.url }} />;
};

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 15,
  },
});

const mapStateToProps = (state) => ({ favoritesList: state.favorites });

export default connect(mapStateToProps, { fetchFavorites, fetchTrending })(
  RecipeScreen
);
