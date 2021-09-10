import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import {
  Grid,
  Button,
  Typography,
  Paper,
  ButtonBase,
  CircularProgress,
} from "@material-ui/core";
import KingBedIcon from "@material-ui/icons/KingBed";
import BathtubIcon from "@material-ui/icons/Bathtub";
import CropDinIcon from "@material-ui/icons/CropDin";
import useStyles from "./style";
import gif from "../../assets/Ho.gif";

import InputText from "../search/searcherInput";
import FilterForm from "../FilterForm/FilterForm";
import Navbar from "../../components/Navbar/Navbar";

import {
  getPropierties,
  //userFavPropierties,
  filterPropierties,
  resetPropierties,
} from "../../redux/counter/actions";

const CounterControls = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const state = useSelector((state) => state.reducer);
  const stateFilters = useSelector((state) => state.FilterReducer);

  const HandleGetPropierties = () => {
    dispatch(resetPropierties());
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container>
        <Grid item className={classes.inputItem}>
          <InputText />
        </Grid>
      </Grid>

      <Grid container className={classes.toolbarContainer}>
        <Grid item className={classes.toolbar}>
          <FilterForm />
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          onClick={HandleGetPropierties}
          className={classes.back}
        >
          Back
        </Button>
      </Grid>

      {state.value == 0 ? (
        <div className={classes.noData}>
          <h1>
            Ups... There is not propierties with the filters that you choosed
          </h1>
        </div>
      ) : (
        <>
          {stateFilters.value == 0 ? (
            <h1>No data colected</h1>
          ) : (
            <>
              <p>{stateFilters.value.typeHouse}</p>
              {/* <p>{stateFilters.value.bedroom}</p> 
          <p>{stateFilters.value.bathrooms}</p> 
          <p>{stateFilters.value.hose_State}</p> 
          <p>{stateFilters.value.morefilters}</p> 
          <p>{stateFilters.value.hours}</p> 
          <p>{stateFilters.value.equipment}</p> 
          <p>{`Maximum price: ${stateFilters.value.range[0]}`}</p> 
          <p>{`Minim price: ${stateFilters.value.range[1]}`}</p>  */}
            </>
          )}

          <Grid container className={classes.listContainer}>
            {state.value.map(
              ({
                id,
                image,
                province,
                offer,
                street,
                type,
                description,
                price,
                room,
                bath,
                size,
              }) => {
                return (
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.media}
                            alt="complex"
                            src={image}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className={classes.title}
                            >
                              <span className={classes.offer}>{offer}</span>{" "}
                              {type} {province}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {street}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          className={classes.price}
                        >
                          {price} €
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.iconContainer}>
                      <Grid item className={classes.iconItem}>
                        <Typography variant="body2" gutterBottom>
                          <KingBedIcon color="disabled" />
                          <Grid item>{room} Room</Grid>
                        </Typography>
                      </Grid>

                      <Grid item className={classes.iconItem}>
                        <Typography variant="body2" gutterBottom>
                          <BathtubIcon color="disabled" />
                          <Grid item>{bath} Bath</Grid>
                        </Typography>
                      </Grid>

                      <Grid item className={classes.iconItem}>
                        <Typography variant="body2" gutterBottom>
                          <CropDinIcon color="disabled" />
                          <Grid item>{size} m2</Grid>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                );
              }
            )}
          </Grid>
        </>
      )}
    </div>
  );
};

export default CounterControls;
