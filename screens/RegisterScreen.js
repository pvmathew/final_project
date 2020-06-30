import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions";
import KeyboardWrapper from "../components/KeyboardWrapper";
import Constants from "expo-constants";

import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from "react-native";

function RegisterScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async () => {
    props.registerUser(email, password, passwordConfirm);
  };

  useEffect(() => {
    if (props.isLoggedIn) {
      props.navigation.navigate("Trending");
    }
  }, [props.isLoggedIn]);

  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
        <Image
          style={styles.logoImage}
          source={require("../assets/images/flambe.png")}
        ></Image>
        <Text style={styles.header}>Register your account.</Text>
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
        <TextInput
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          placeholder="Confirm Password"
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
        ></TextInput>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.error}>{props.err}</Text>
      </View>
    </KeyboardWrapper>
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
  backButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    borderColor: "#008080",
  },
  backButtonText: {
    color: "#008080",
  },
  logoImage: {
    height: 50,
    width: 50,
    position: "absolute",
    right: 0,
    top: 10,
    margin: 20,
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
  registerButton: {
    alignSelf: "center",
    borderRadius: 10,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#008080",
  },
  loginButtonText: {
    color: "#fff",
  },
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
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { registerUser })(RegisterScreen);
