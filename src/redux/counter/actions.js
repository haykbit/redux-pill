import $ from "jquery";

import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  SET_FILTERS,
  RESET_PROPIERTIES,
} from "./types";
const token='5|NuKpvpUSA1q18x7ensh4KNmz8l0NUdmXcuiWIhTx';
export const getPropierties = () => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:8100/api/properties",
        type: "GET",
        headers:{'Authorization': `Bearer ${token}`},
        success: (res) => {
          console.log(res)
          dispatch({ type: GET_PROPIERTIES, payload: res.data });
        },
      });
    } catch (error) {
      console.log(error);
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
