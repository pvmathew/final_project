import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Text } from "react-native";
import { logoutUser } from "../redux/actions";
import { connect } from "react-redux";
import Firebase from "firebase";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={{ textAlign: "right", marginRight: 10 }}>Hi there,</Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
          marginBottom: 10,
          marginRight: 10,
          textAlign: "right",
        }}
      >
        {Firebase.auth().currentUser.email}
      </Text>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => props.logoutUser()} />
    </DrawerContentScrollView>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logoutUser })(CustomDrawerContent);
