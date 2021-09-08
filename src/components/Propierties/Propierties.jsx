import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Grid,
  Card,
  InputBase,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  FormControl,
  Paper,
  ButtonBase,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KingBedIcon from "@material-ui/icons/KingBed";
import BathtubIcon from "@material-ui/icons/Bathtub";
import CropDinIcon from "@material-ui/icons/CropDin";
import useStyles from "./style";

import {
  getPropierties,
  //userFavPropierties,
  filterPropierties,
} from "../../redux/counter/actions";

const CounterControls = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    HandleGetPropierties();
  }, []);
  const state = useSelector((state) => state.data);
  //console.log(state);

  const HandleGetPropierties = () => {
    dispatch(getPropierties());
  };
  const console = (state) => {
    console.log(state);
  };

  // const HandleUserFavPropierties = () => {
  //   dispatch(userFavPropierties());
  // }

  const HandleFilterPropierties = () => {
    dispatch(filterPropierties());
  };
  return (
    <>
      <button onClick={HandleGetPropierties}>GET</button>
      <div className={classes.root}>
        <Grid container>
          <Grid item className={classes.inputItem}>
            <InputBase
              className={classes.input}
              placeholder="Piso Barcelona centro"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container className={classes.toolbarContainer}>
          <Grid item className={classes.toolbar}></Grid>
        </Grid>

        <Grid container className={classes.listContainer}></Grid>
      </div>
      {/*<button onClick={HandleUserFavPropierties}>FAV</button>
      <button onClick={HandleFilterPropierties}>FILTER</button>*/}
    </>
  );
};

export default CounterControls;
