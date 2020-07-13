import { combineReducers } from "redux";

import {
  REGISTER_REJECTED,
  REGISTER_FULFILLED,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  LOG_OUT_COMPLETE,
  AUTO_LOG_IN_COMPLETE,
  SEARCH_SENT,
  SEARCH_COMPLETE,
  REMOVE_COMPLETE,
  USER_FETCH_COMPLETE,
  TRENDING_FETCH_COMPLETE,
} from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const INITIAL_STATE = {};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_FULFILLED:
    case LOG_IN_FULFILLED:
    case AUTO_LOG_IN_COMPLETE:
      return merge(state, { isLoggedIn: true });
    case REGISTER_REJECTED:
    case LOG_IN_REJECTED:
      return merge(state, { error: action.payload });
    case LOG_OUT_COMPLETE:
      return merge(state, { isLoggedIn: false });
    default:
      return state;
  }
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_SENT:
    case SEARCH_COMPLETE:
      return merge(state, { results: action.payload });
    case LOG_OUT_COMPLETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const favoritesReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FETCH_COMPLETE:
      return merge(state, action.payload);
    case REMOVE_COMPLETE:
      let recipeID = action.payload;
      let { [recipeID]: omit, ...res } = state;
      return res;
    case LOG_OUT_COMPLETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const trendingReducer = (state = {}, action) => {
  switch (action.type) {
    case TRENDING_FETCH_COMPLETE:
      return merge(state, action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  trending: trendingReducer,
});

export default rootReducer;
