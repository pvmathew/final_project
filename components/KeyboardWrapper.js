import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import Constants from "expo-constants";
import { ifIphoneX } from "react-native-iphone-x-helper";
import PropTypes from "prop-types";

const KeyboardWrapper = (props) => {
  const { children } = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

KeyboardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default KeyboardWrapper;
