import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import Constants from "expo-constants";

import { View, StyleSheet, Text, Button, StatusBar } from "react-native";
import { connect } from "react-redux";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>This is the favorites page!</Text>
    </View>
  );
}

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
});
