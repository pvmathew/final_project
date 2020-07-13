import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { logoutUser } from "../redux/actions";
import { connect } from "react-redux";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => props.logoutUser()} />
    </DrawerContentScrollView>
  );
}


const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logoutUser })(CustomDrawerContent);
