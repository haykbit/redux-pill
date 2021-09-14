import $ from "jquery";


import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  SET_FILTERS,
  RESET_PROPIERTIES,
  SET_TOKEN,
  LOGIN,
  REGISTER,
  LOGOUT
} from "./types";


const token=localStorage.getItem('tokken');
export const logout = ()=>{
  
  return (dispatch)=>{dispatch({type:LOGOUT, playload:0})};

}
export const login = (user) => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:8100/api/login",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(user),          
        success: (res) => {
          console.log(res);
          dispatch({ type: LOGIN, payload: res.data });
          localStorage.setItem('tokken',res.data.token)
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const register = (newUser) => {
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:8100/api/register",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(newUser),   
        success: (res) => {
          console.log(res);
          dispatch({ type: REGISTER, payload: res.data });
          localStorage.setItem('tokken',res.data.token)
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPropierties = () => {
 
  return async (dispatch) => {
    try {
      const apiResult = await $.ajax({
        url: "http://localhost:8100/api/properties",
        type: "GET",
        headers:{'Authorization': `Bearer 20|B7i8AOsjPSrYyprJeGIt0l8rmdb4SJsadvs8e9DW`},
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
