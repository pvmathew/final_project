import React from "react";
import { useState, useEffect } from "react";
import { AppLoading } from "react-native";
import store from "./redux/store";
import { Provider } from "react-redux";

import { useFonts, SuezOne_400Regular } from "@expo-google-fonts/suez-one";

import Root from "./Root";

export default function App(props) {
  let [fontsLoaded] = useFonts({
    SuezOne_400Regular,
  });

  // if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
