import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import { View, StyleSheet, Text, Button, StatusBar } from "react-native";
import Constants from "expo-constants";

import { connect } from "react-redux";
import { logoutUser, fetchFavorites, fetchTrending } from "../redux/actions";

import TrendingItem from "../components/TrendingItem";
import { ScrollView } from "react-native-gesture-handler";

const TrendingScreen = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const { currentUser } = Firebase.auth();
    setCurrentUser(currentUser);
    props.fetchFavorites(currentUser.uid);
    props.fetchTrending();
  }, []);

  const TrendingItems = Object.keys(props.trendingList).map((key, index) => (
    <TrendingItem key={index} name={key} meta={props.trendingList[key]} navigate={props.navigation.navigate} />
  ));

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {TrendingItems}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    paddingTop: Constants.statusBarHeight,
  },
  placeholder: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({ trendingList: state.trending });

export default connect(mapStateToProps, {
  logoutUser,
  fetchFavorites,
  fetchTrending,
})(TrendingScreen);
