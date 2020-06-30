import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyAvCB2V5I-m7mBPDwh-XdNy5jBlQwP5Bw8",
  authDomain: "recipe-disaster.firebaseapp.com",
  databaseURL: "https://recipe-disaster.firebaseio.com",
  projectId: "recipe-disaster",
  storageBucket: "recipe-disaster.appspot.com",
  messagingSenderId: "852881199093",
  appId: "1:852881199093:web:67ec9f3a10898363ba9abc",
  measurementId: "G-TZWDVJGJDX",
};

export const init = Firebase.initializeApp(config);
