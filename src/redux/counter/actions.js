import $ from "jquery"

import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES
} from './types'

export const getPropierties = () => {
  return async (dispatch) => {
    try {
      await $.ajax({
        url: "http://localhost:3000/properties", 
        type: "GET",
        success: (res) => {
          dispatch({ type: GET_PROPIERTIES, payload: res })
        } 
      });
    } catch (error) {
      console.log("Error");
    }
  }
};

export const userFavPropierties = () => (
  {
    type: FAV_USER_PROPIERTIES,
    //payload: Ayax petition data
  }
);

export const filterPropierties = () => (
  {
    type: FILTER_PROPIERTIES,
    //payload: Ayax petition data
  }
);

/*
export const setRandomCounter = (maxValue) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_COUNTER })
    try {
      const apiResult = await getRandom(maxValue);
      dispatch({ type: SET_COUNTER, payload: apiResult })
    } catch (error) {
      dispatch({ type: ERROR_COUNTER })
    }
  }
}
*/