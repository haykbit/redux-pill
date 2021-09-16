import {
  INITIAL_STATE,
  INITIAL_FILTER_STATE,
  INITIAL_SESSION_STATE,
} from "./state";

import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  SET_FILTERS,
  RESET_PROPIERTIES,
  LOGIN,
  REGISTER,
  LOGOUT,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROPIERTIES:
      return { ...state, value: action.payload };

    case FAV_USER_PROPIERTIES:
      return { ...state, favorites: action.payload };

    case FILTER_PROPIERTIES:
      return { ...state, value: action.payload };

    case CITY_PROPIERTIES:
      return { ...state, value: action.payload };

    case RESET_PROPIERTIES:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};

const FilterReducer = (state = INITIAL_FILTER_STATE, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

const sessionReducer = (state = INITIAL_SESSION_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, value: action.payload };
    case REGISTER:
      return { ...state, value: action.payload };
    case LOGOUT:
      return { ...INITIAL_SESSION_STATE };

    default:
      return state;
  }
};

export { reducer, FilterReducer, sessionReducer };
