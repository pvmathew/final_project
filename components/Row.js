import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

const Row = (props) => (
  <TouchableOpacity style={styles.row}>
    <Image
      source={{ uri: props.recipe.image }}
      style={{ width: 50, height: 75 }}
    ></Image>
    <View style={styles.rowContainer}>
      <Text style={{ maxWidth: "80%" }}>{props.recipe.label}</Text>
      <Text style={{ position: "absolute", right: 0 }}>
        {props.recipe.source}
      </Text>
    </View>
  </TouchableOpacity>
);

Row.propTypes = {
  recipe: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingBottom: 5,
    marginBottom: 5,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  rowContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Row;
