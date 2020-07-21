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

  const AllTrendingItems = Object.keys(props.trendingList).map((key, index) => (
    <View style={styles.tableHeader} key={index}>
      <Text style={styles.ranking}>{index + 1}</Text>
      <Text style={styles.recipe}> {key} </Text>
      <Text style={styles.numFavorites}>
        {props.trendingList[key].favoriteCount}
      </Text>
    </View>
  ));

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.tableHeader}>
        <Text style={{ ...styles.ranking, fontWeight: "bold" }}> Ranking </Text>
        <Text style={{ ...styles.recipe, fontWeight: "bold" }}> Recipe </Text>
        <Text style={{ ...styles.numFavorites, fontWeight: "bold" }}>
          {" "}
          Favorites{" "}
        </Text>
      </View>
      {AllTrendingItems}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    textAlign: "center",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    // shadowOffset: { width: 0, height: 0 },
    // shadowColor: "black",
    // shadowOpacity: 0.25,
  },
  tableHeader: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  ranking: {
    alignSelf: "stretch",
    textAlign: "center",
    flex: 1,
  },
  recipe: {
    alignSelf: "stretch",
    flex: 2,
  },
  numFavorites: {
    alignSelf: "stretch",
    flex: 1,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({ trendingList: state.trending });

export default connect(mapStateToProps, {
  logoutUser,
  fetchFavorites,
  fetchTrending,
})(TrendingScreen);
