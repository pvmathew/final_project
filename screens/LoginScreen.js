import * as React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}></TextInput>
      <TextInput style={styles.textInput}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    // alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
