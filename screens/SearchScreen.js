import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { fetchRecipes } from "../redux/actions";
import Row from "../components/Row";
function SearchScreen(props) {
  const [input, inputChange] = useState("");
  const [init, setInit] = useState(true);
  const handleSubmit = () => {
    setInit(false);
    let query = input.split(" ").join("%20");
    props.fetchRecipes(query);
  };

  const handlePress = (recipe) => {
    props.navigation.navigate("Recipe", recipe);
  };

  const resultRows =
    props.results &&
    props.results.map((result, index) => (
      <Row key={index} recipe={result.recipe} handlePress={handlePress} />
    ));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Search for Recipes.</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={(text) => inputChange(text)}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.goButtonText}>Go</Text>
        </TouchableOpacity>

        <Ionicons
          name="ios-search"
          size={25}
          color="#000"
          style={styles.searchIcon}
        />
      </View>

      {!resultRows && !init ? (
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      ) : (
        <ScrollView style={styles.scrollView}>{resultRows}</ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  textInput: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 45,
    paddingRight: 15,
    flex: 1,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 25,
  },
  backButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    borderColor: "#008080",
    backgroundColor: "#008080",
  },
  backButtonText: {
    color: "#fff",
  },
  header: {
    fontFamily: "SuezOne_400Regular",
    color: "#008080",
    fontSize: 20,
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 25,
  },
  goButton: {
    borderColor: "#008080",
    backgroundColor: "#008080",
    width: 60,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
  },
  goButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  activityIndicator: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  scrollView: {
    marginTop: 20,
  },
});

const mapStateToProps = (state) => ({
  results: state.search.results,
});

export default connect(mapStateToProps, { fetchRecipes })(SearchScreen);
