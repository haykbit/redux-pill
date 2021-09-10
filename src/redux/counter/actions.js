import $ from "jquery"

import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  SET_FILTERS
} from './types'

export const getPropierties = () => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:3000/properties", 
        type: "GET",
        success: (res) => {
          console.log(res);
        } 
      });
      dispatch({ type: GET_PROPIERTIES, payload: apiResult })
    } catch (error) {
      console.log("Error");
    }
  }
};

// export const userFavPropierties = () => {
//   {
//     type: FAV_USER_PROPIERTIES,
//     //payload: Ayax petition data
//   }
// };
export const set_filters = (datafilters) => {
  return (dispatch) => {
  
      dispatch({ type: SET_FILTERS, payload: datafilters })
    
  }
};

export const filterPropierties = () => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:3000/properties?price_gte=100000&price_lte=300000&room=5&bath=3&pet=true", 
        type: "GET",
        success: (res) => {
          console.log(res);
        } 
      });
      dispatch({ type: FILTER_PROPIERTIES, payload: apiResult })
    } catch (error) {
      console.log("Error");
    }
  }
};

export const getPropiertiesByCityName = (city) => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: `http://localhost:3000/properties?city=${city}`, 
        type: "GET",
        success: (res) => {
          console.log(res);
        } 
      });
      dispatch({ type: CITY_PROPIERTIES, payload: apiResult })
    } catch (error) {
      console.log("Error");
    }
  }
};

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