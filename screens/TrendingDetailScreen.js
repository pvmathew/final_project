import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Vibration,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { connect } from "react-redux";
import { logoutUser, fetchFavorites, fetchTrending } from "../redux/actions";

import TrendingItem from "../components/TrendingItem";

import Constants from "expo-constants";

const TrendingScreen = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const { currentUser } = Firebase.auth();
    setCurrentUser(currentUser);
    props.fetchFavorites(currentUser.uid);
    props.fetchTrending();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>This page will show a detailed summary of the top recipes</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    paddingTop: Constants.statusBarHeight,
    // alignItems:"center"
  },
  placeholder: {
    textAlign: "center",
  },
  viewButton: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "gray",
    borderRadius: 10,
    backgroundColor: "#008080",
    marginBottom: 60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  viewButtonText: {
    paddingVertical: 12,
    color: "white",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => ({ trendingList: state.trending });

export default connect(mapStateToProps, {
  logoutUser,
  fetchFavorites,
  fetchTrending,
})(TrendingScreen);
