import $ from "jquery";

import {
  GET_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  SET_FILTERS,
  RESET_PROPIERTIES,
  LOGIN,
  REGISTER,
  LOGOUT,
} from "./types";

const token = localStorage.getItem("token");
export const logout = () => {
  return (dispatch) => {
    //   const apiResults =await $.ajax({
    //     url:"http://localhost:8100/api/logout",
    //     type:"POST",
    //     success:(res)=>{

    //       console.log("log res",res)
    dispatch({ type: LOGOUT, playload: 0 });
  };
  //   });
  // }
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      console.log("user: ", user);
      await $.ajax({
        url: "http://localhost:8100/api/login",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: (res) => {
          console.log("LOGIN RESPONSE: ", res);
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN, payload: res.data });
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
      await $.ajax({
        url: "http://localhost:8100/api/register",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(newUser),
        success: (res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          dispatch({ type: REGISTER, payload: res.data });
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
      await $.ajax({
        url: "http://localhost:8100/api/properties",
        type: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        success: (res) => {
          console.log("GET PROPIERTEIS: ", res);
          dispatch({ type: GET_PROPIERTIES, payload: res.data });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePropierties = (id, updated, state) => {
  return async (dispatch) => {
    try {
      await $.ajax({
        url: `http://localhost:8100/api/properties/${id}`,
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: JSON.stringify(updated),
        success: (res) => {
          console.log("UPDATE REESPONSE: ", res.data);
          dispatch({ type: GET_PROPIERTIES, payload: state });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletPropierties = (id, state) => {
  return async (dispatch) => {
    try {
      await $.ajax({
        url: `http://localhost:8100/api/properties/${id}`,
        type: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        success: (res) => {
          console.log("DELETE: ", res.data);
          dispatch({ type: GET_PROPIERTIES, payload: state });
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
        url: `http://localhost:8100/api/properties?city=${city}`,
        type: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        success: (res) => {
          console.log(res);
          dispatch({ type: CITY_PROPIERTIES, payload: res.data });
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
