import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import { View, StyleSheet, Text, Button, StatusBar } from "react-native";
import Constants from "expo-constants";

import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";

const TrendingScreen = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const { currentUser } = Firebase.auth();
    setCurrentUser(currentUser);
  }, []);


  return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.placeholder}>Hi {currentUser.email}!</Text>
        <Button
          title="Logout"
          onPress={() => {
            props.logoutUser();
          }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: Constants.statusBarHeight,
  },
  placeholder: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logoutUser })(TrendingScreen);
