import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContentComponent from "./components/CustomDrawerContentComponent";

import MainTabs from "./MainTabs";
const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator({
//   contentComponent: CustomDrawerContentComponent,
// });

export default function MainDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          width: 240,
        }}
        drawerContentOptions={{ activeTintColor: "#008080" }}
      >
        <Drawer.Screen name="Home" component={MainTabs} />
        <Drawer.Screen name="Settings" component={MainTabs} />
        <Drawer.Screen name="About" component={MainTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
