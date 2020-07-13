import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions";
import KeyboardWrapper from "../components/KeyboardWrapper";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";

import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from "react-native";

function AboutScreen(props) {
  const isFocused = useIsFocused();



  const statusBar = isFocused ? <StatusBar barStyle="dark-content" /> : null;

  return (
    <View style={styles.container}>
      {statusBar}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name="ios-home" size={25} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.header}>About this app.</Text>
      <Text style={styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nihil iste architecto officia eum temporibus quidem error explicabo veniam dolorum. Incidunt neque voluptas velit nostrum quibusdam quia iure iusto culpa.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    fontFamily: "SuezOne_400Regular",
    color: "#008080",
    fontSize: 20,
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 25,
  },
  content: {
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    borderColor: "#008080",
  },
  homeButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    right: 0,
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    borderColor: "#008080",
    backgroundColor: "#008080",
  },
  backButtonText: {
    color: "#008080",
  },
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { registerUser })(AboutScreen);
