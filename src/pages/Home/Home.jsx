import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  Grid,
  Button,
  Typography,
  CardMedia,
  LinearProgress,
} from "@material-ui/core";
import useStyles from "./style";
import InputSearch from "../../components/Search/SearcherInput";
import Navbar from "../../components/Navbar/Navbar";

import {
  getPropierties,
  getPropiertiesOffer,
} from "../../redux/counter/actions";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropierties());
  }, []);

  const state = useSelector((state) => state.reducer.value);
   console.log("estado",state);

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
              {state.length === 0 ? (
                <span></span>
              ) : (
                <>
                <NavLink exact to="/propierties" style={{ textDecoration: "none" }}>
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
                <Grid Item className={classes.containerPop}>
                  <CardMedia
                    className={classes.item}
                    image={state[0].image}
                    title="Contemplative Reptile"
                  />
                  <CardMedia
                    className={classes.item}
                    image={state[1].image}
                    title="Contemplative Reptile"
                  />
                </Grid>
                </>
              )}
            </Grid>
            <Grid Item className={classes.popular}>
              {state.length === 0 ? (
                <span></span>
              ) : (
                <>
                <NavLink exact to="/propierties" style={{ textDecoration: "none" }}>
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
                <Grid Item className={classes.containerPop}>
                  <CardMedia
                    className={classes.item}
                    image={state[0].image}
                    title="Contemplative Reptile"
                  />
                  <CardMedia
                    className={classes.item}
                    image={state[1].image}
                    title="Contemplative Reptile"
                  />
                </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
