import Constants from "expo-constants";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export const loadNotifications = () => {
  askPermission();

  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );

  return Notifications.addListener(notificationHandler);
};

const notificationHandler = () => {
  console.log("Notification received!");
};

const localNotification = {
  sound: "default",
  title: "Getting Hungry?",
  body: "Why not try searching for dinner ideas?",
  ios: { _displayInForeground: true },
};

const schedulingOptions = {
  time: new Date().setHours(17, 0, 0),
};

const askPermission = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    console.log("Permission was granted!");
    // only need token for push notifications
    // let token = await Notifications.getExpoPushTokenAsync();
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.createChannelAndroidAsync("default", {
      name: "default",
      sound: true,
      priority: "max",
      vibrate: [0, 250, 250, 250],
    });
  }
};
