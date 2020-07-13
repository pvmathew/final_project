import auth from "../firebase/auth";
import recipe from "../api/recipe";
import favorites from "../firebase/favorites";

// action types
export const REGISTER_SENT = "REGISTER_SENT";
export const REGISTER_FULFILLED = "REGISTER_FULFILLED";
export const REGISTER_REJECTED = "REGISTER_REJECTED";
export const LOG_IN_SENT = "LOG_IN_SENT";
export const LOG_IN_FULFILLED = "LOG_IN_FULFILLED";
export const LOG_IN_REJECTED = "LOG_IN_REJECTED";
export const LOG_OUT_SENT = "LOG_OUT_SENT";
export const LOG_OUT_COMPLETE = "LOG_OUT_COMPLETE";
export const AUTO_LOG_IN_COMPLETE = "AUTO_LOG_IN_COMPLETE";

export const SEARCH_SENT = "SEARCH_SENT";
export const SEARCH_COMPLETE = "SEARCH_COMPLETE";

export const FETCHING_USER = "FETCHING_USER";
export const USER_FETCH_COMPLETE = "USER_FETCH_COMPLETE";

export const REMOVING_FAVORITE = "REMOVING_FAVORITE";
export const REMOVE_COMPLETE = "REMOVE_COMPLETE";

export const FETCHING_TRENDING = "FETCHING_TRENDING";
export const TRENDING_FETCH_COMPLETE = "TRENDING_FETCH_COMPLETE";

// async action creators
export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: LOG_IN_SENT });
  auth
    .login(email, password)
    .then((res) => {
      dispatch({ type: LOG_IN_FULFILLED });
    })
    .catch((err) => {
      dispatch({ type: LOG_IN_REJECTED, payload: err.message });
    });
};

export const autoLogin = () => ({
  type: AUTO_LOG_IN_COMPLETE,
});

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOG_OUT_SENT });
  auth.logout().then((res) => {
    dispatch({ type: LOG_OUT_COMPLETE });
  });
};

export const registerUser = (email, password, passwordConfirm) => async (
  dispatch
) => {
  dispatch({ type: REGISTER_SENT });

  if (password !== passwordConfirm) {
    dispatch({ type: REGISTER_REJECTED, payload: "Passwords do not match." });
  } else {
    auth
      .signup(email, password)
      .then((res) => {
        dispatch({ type: REGISTER_FULFILLED });
      })
      .catch((err) => {
        dispatch({ type: REGISTER_REJECTED, payload: err.message });
      });
  }
};

export const fetchRecipes = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_SENT });
  recipe.search(query).then((res) => {
    dispatch({ type: SEARCH_COMPLETE, payload: res });
  });
};

export const fetchFavorites = (userID) => async (dispatch) => {
  dispatch({ type: FETCHING_USER });
  favorites
    .fetchFavorites(userID)
    .then((res) => dispatch({ type: USER_FETCH_COMPLETE, payload: res }));
};

export const removeFavorite = (userID, recipeID, title) => async (dispatch) => {
  dispatch({ type: REMOVING_FAVORITE });
  favorites.remove(userID, recipeID, title).then((res) => {
    dispatch({ type: REMOVE_COMPLETE, payload: recipeID });
  });
};

export const fetchTrending = () => async (dispatch) => {
  dispatch({ type: FETCHING_TRENDING });
  favorites.fetchTrending().then((res) => {
    dispatch({ type: TRENDING_FETCH_COMPLETE, payload: res });
  });
};
