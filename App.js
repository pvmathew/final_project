import React, {useEffect } from "react";
import store from "./redux/store";

import { Provider } from "react-redux";

import { useFonts, SuezOne_400Regular } from "@expo-google-fonts/suez-one";

import Root from "./Root";
import {loadNotifications} from "./Notifications"

export default function App(props) {
  let [fontsLoaded] = useFonts({
    SuezOne_400Regular,
  });

  useEffect(() => {
    let listener = loadNotifications();
    return (() => listener.remove())
  }, [])

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
