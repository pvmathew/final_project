import * as React from "react";
import { StyleSheet } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import LoginScreen from "./screens/LoginScreen";

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <LoginScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
