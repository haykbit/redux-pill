import { TextField, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import { useState } from "react";
import $ from "jquery";
import { Autocomplete } from "@material-ui/lab";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getPropiertiesByCityName } from "../../redux/counter/actions";
import { NavLink } from "react-router-dom";

export default function InputText() {
  const [inputValue, setInputValue] = useState("");
  const [citySearched, setCitySearched] = useState([]);

  const dispatch = useDispatch();
  const classes = useStyles();

  // const state = useSelector((state)=>state.data);
  let cities = [];

  $.ajax({
    url: "http://localhost:3000/properties",
    type: "GET",
    success: (res) => {
      res.map((item) => {
        var find = cities.indexOf(item.city) > -1;
        if (find === true) {
        } else {
          cities.push(item.city);
        }
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
      {citySearched.length == 0 ? (
        <p></p>
      ) : (
        <NavLink exact to="/dashboard" style={{ textDecoration: "none" }}>
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
