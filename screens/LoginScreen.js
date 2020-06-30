import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions";
import Firebase from "firebase";

import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
  StatusBar,
} from "react-native";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActivityIndicatorVisible, showActivityIndicator] = useState(false);

  useEffect(() => {
    showActivityIndicator(false);
  }, [props.err]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/images/flambe.png")}
        ></Image>
        <Text style={styles.logoText}>Recipe Disaster</Text>
      </View>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={styles.textInput}
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        autoCapitalize="none"
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          showActivityIndicator(true);
          props.loginUser(email, password);
        }}
        style={styles.loginButton}
      >
        {!isActivityIndicatorVisible ? (
          <Text style={styles.loginButtonText}>Login</Text>
        ) : (
          <ActivityIndicator style={styles.activityIndicator} />
        )}
      </TouchableOpacity>

      <Text style={styles.error}>{props.err}</Text>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => props.navigation.navigate("Register")}
      >
        <Text style={styles.registerButtonText}>
          I don't have an account yet..
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    justifyContent: "center",
  },
  logoContainer: {
    fontFamily: "SuezOne_400Regular",
    color: "#fff",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    marginTop: 50,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: { height: 50, width: 50 },
  logoText: {
    fontFamily: "SuezOne_400Regular",
    fontSize: 30,
    color: "#fff",

    // position: "absolute",
    // top: 0,
    // right: 0,
    // left: 0,
    // textAlign: "center",
    // marginTop: 50,
    // fontSize: 30,
    // padding: 5,
  },
  textInput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 25,
    marginBottom: 10,
    marginRight: 25,
    backgroundColor: "#fff",
  },
  loginButton: {
    alignSelf: "center",
    borderRadius: 10,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
  },
  activityIndicator: {},
  loginButtonText: {
    color: "#fff",
  },
  registerButton: {
    alignSelf: "center",
    borderRadius: 10,
    width: "auto",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
  },
  registerButtonText: { color: "#008080" },
  registerText: { color: "#fff" },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 5,
    marginHorizontal: 10,
  },
});

const mapStateToProps = (state) => ({
  err: state.auth.error,
});

export default connect(mapStateToProps, { loginUser })(LoginScreen);
