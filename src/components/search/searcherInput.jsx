import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import $ from "jquery";

import { TextField, Button } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { Autocomplete } from "@material-ui/lab";
import useStyles from "./style";

import { getPropiertiesByCityName } from "../../redux/counter/actions";

export default function InputText() {
  const [inputValue, setInputValue] = useState("");
  const [citySearched, setCitySearched] = useState([]);

  const dispatch = useDispatch();
  const classes = useStyles();

  let cities = [];

  $.ajax({
    url: "http://localhost:8100/api/properties",
    type: "GET",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    success: (res) => {
      res.data.map((item) => {
        var find = cities.indexOf(item.city) > -1;
        if (find === true) {
        } else {
          cities.push(item.city);
        }
        return find;
      });
    },
  });

  const handelChange = (event, value) => {
    //setInputValue(e);
    setCitySearched(value);
    setInputValue(value);
  };

  async function handlePropietiesByCity(e) {
    e.preventDefault();
    dispatch(getPropiertiesByCityName(inputValue));
  }

  return (
    <>
      <form onSubmit={handlePropietiesByCity} className={classes.form}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={handelChange}
          disableClearable
          options={cities}
          renderInput={(params) => (
            <TextField
              className={classes.textSearch}
              {...params}
              label="Where you would like to live?"
              margin="normal"
              variant="outlined"
            />
          )}
        />
      </form>
      {citySearched.length === 0 ? (
        <p></p>
      ) : (
        <NavLink exact to="/propierties" style={{ textDecoration: "none" }}>
          <Button
            variant="primpary"
            onClick={() => {
              dispatch(getPropiertiesByCityName(citySearched));
            }}
            className={classes.button}
          >
            <RoomIcon color="primary" />
            {citySearched}
          </Button>
        </NavLink>
      )}
    </>
  );
}
