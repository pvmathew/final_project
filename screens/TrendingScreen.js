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
    <View>
      <Text>{key} </Text>
      <Text>Favorite Count: {props.trendingList[key].favoriteCount}</Text>
    </View>
  ));

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {TrendingItems}

      {/* <Text style={styles.placeholder}>Hi {currentUser.email}!</Text>
      <Button
        title="Logout"
        onPress={() => {
          props.logoutUser();
        }}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
