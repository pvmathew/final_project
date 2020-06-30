import React, { useState, useEffect } from "react";
import MainDrawer from "./MainDrawer";
import AuthStack from "./AuthStack";
import Firebase from "firebase";
import { connect } from "react-redux";
import { AppLoading } from "expo";
import { autoLogin } from "./redux/actions";

function Root(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.autoLogin();
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return props.isLoggedIn ? <MainDrawer /> : <AuthStack />;
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { autoLogin })(Root);
