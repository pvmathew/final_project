import Firebase from "firebase";
import init from "./config";

const authMethods = {
  signup: async (email, password) =>
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      }),
  login: async (email, password) =>
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      }),
  logout: async () =>
    Firebase.auth()
      .signOut()
      .then((res) => res)
      .catch((err) => {
        throw err;
      }),
};

export default authMethods;
