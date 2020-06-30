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
} from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_FULFILLED:
    case LOG_IN_FULFILLED:
      return merge(state, { isLoggedIn: true });
    case REGISTER_REJECTED:
    case LOG_IN_REJECTED:
      return merge(state, { error: action.payload });
    case LOG_OUT_COMPLETE:
      return merge(state, { isLoggedIn: false });
    case AUTO_LOG_IN_COMPLETE:
      return merge(state, { isLoggedIn: true });
    default:
      return state;
  }
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_SENT:
    case SEARCH_COMPLETE:
      return merge(state, { results: action.payload });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

export default rootReducer;
