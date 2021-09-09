import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Grid, Button, Typography, CardMedia } from "@material-ui/core";
import useStyles from "./style";
import InputSearch from "../../components/search/searcherInput";
import Navbar from "../../components/Navbar/Navbar";

import {
  getPropierties,
  getPropiertiesOffer,
} from "../../redux/counter/actions";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getPropierties());
    setIsLoaded(true);
  }, []);

  const state = useSelector((state) => state.data);
  // Coger dos propiedades en venta y alquiler

  console.log(state);

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <Grid container className={classes.cover}>
          <Grid item className={classes.topSection}>
            <Grid item className={classes.text}>
              <Typography gutterBottom variant="h3">
                There are many houses, but without you there could never be a
                home
              </Typography>
              <br></br>
              <Typography variant="h5" gutterBottom>
                Search and find your new nest
              </Typography>
            </Grid>

            <Grid item className={classes.search}>
              <InputSearch />
            </Grid>
          </Grid>

          <Grid item className={classes.bottomSection}>
            <Grid Item className={classes.popular}>
              <NavLink exact to="/dashboard" style={{ textDecoration: "none" }}>
                <Button
                  className={classes.offerButton}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(getPropiertiesOffer("Sell"));
                  }}
                >
                  View sales
                </Button>
              </NavLink>

              {state.value.length == 0 ? (
                <p>No data</p>
              ) : (
                <Grid Item className={classes.containerPop}>
                  <CardMedia
                    className={classes.item}
                    image={state.value[2].image}
                    title="Contemplative Reptile"
                  />
                  <CardMedia
                    className={classes.item}
                    image={state.value[3].image}
                    title="Contemplative Reptile"
                  />
                </Grid>
              )}
            </Grid>
            <Grid Item className={classes.popular}>
              <NavLink exact to="/dashboard" style={{ textDecoration: "none" }}>
                <Button
                  className={classes.offerButton}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(getPropiertiesOffer("Rent"));
                  }}
                >
                  View rentals
                </Button>
              </NavLink>
              {state.value.length == 0 ? (
                <p>No data</p>
              ) : (
                <Grid Item className={classes.containerPop}>
                  <CardMedia
                    className={classes.item}
                    image={state.value[0].image}
                    title="Contemplative Reptile"
                  />
                  <CardMedia
                    className={classes.item}
                    image={state.value[1].image}
                    title="Contemplative Reptile"
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
