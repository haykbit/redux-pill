import $ from "jquery";

import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  SET_FILTERS,
  RESET_PROPIERTIES,
} from "./types";

export const getPropierties = () => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:3000/properties",
        type: "GET",
        success: (res) => {
          dispatch({ type: GET_PROPIERTIES, payload: res });
        },
      });
    } catch (error) {
      console.log("Error");
    }
  };
};

export const set_filters = (datafilters) => {
  return (dispatch) => {
    dispatch({ type: SET_FILTERS, payload: datafilters });
  };
};

export const filterPropierties = (query) => {
  return async (dispatch) => {
    try {
      await $.ajax({
        url: `http://localhost:3000/properties?${query}`,
        type: "GET",
        success: (res) => {
          dispatch({ type: FILTER_PROPIERTIES, payload: res });
        },
      });
    } catch (error) {
      console.log("Error");
    }
  };
};

export const getPropiertiesByCityName = (city) => {
  return async (dispatch) => {
    try {
      await $.ajax({
        url: `http://localhost:3000/properties?city=${city}`,
        type: "GET",
        success: (res) => {
          dispatch({ type: CITY_PROPIERTIES, payload: res });
        },
      });
    } catch (error) {
      console.log("Error");
    }
  };
};

export const getPropiertiesOffer = (offer) => {
  return async (dispatch) => {
    try {
      await $.ajax({
        url: `http://localhost:3000/properties?offer=${offer}`,
        type: "GET",
        success: (res) => {
          dispatch({ type: CITY_PROPIERTIES, payload: res });
        },
      });
    } catch (error) {
      console.log("Error");
    }
  };
};

export const resetPropierties = () => ({ type: RESET_PROPIERTIES });
