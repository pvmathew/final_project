import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Vibration,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

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

  const TrendingItems = Object.keys(props.trendingList).map((key, index) => (
    <TrendingItem
      key={index}
      name={key}
      meta={props.trendingList[key]}
      navigate={props.navigation.navigate}
    />
  ));

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {TrendingItems}

      <TouchableOpacity
        style={styles.viewDetail}
        onPress={async () => {
          props.navigation.navigate("TrendingDetails");
        }}
      >
        <Text style={styles.viewDetailText}>View More</Text>
      </TouchableOpacity>
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
  viewDetail: {
    width: "90%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#008080",
    shadowOffset: { width: 0, height: 0 },
    alignItems: "center",
    marginBottom: 60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  viewDetailText: {
    color: "white",
    paddingVertical: 12,
  },
});

const mapStateToProps = (state) => ({ trendingList: state.trending });

export default connect(mapStateToProps, {
  logoutUser,
  fetchFavorites,
  fetchTrending,
})(TrendingScreen);
