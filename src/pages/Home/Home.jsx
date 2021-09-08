import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
  AppBar,
  TextField,
  Toolbar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import logo from "../../assets/logo-2.jpg";
import background from "../../assets/back.jpg";
import useStyles from "./style";
import index from "./index.css";

import { getPropierties } from "../../redux/counter/actions";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropierties());
  }, []);

  const state = useSelector((state) => state.data);

  console.log(state);

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <AppBar className={classes.navbar}>
            <Toolbar>
              <Grid container className={classes.container}>
                <Grid item className={classes.logo}>
                  <NavLink exact to="/home">
                    <img
                      src={logo}
                      alt="Houser Logo"
                      height="45px"
                      className={classes.image}
                    />
                  </NavLink>
                </Grid>
                <Grid item className={classes.link}>
                  <NavLink exact to="/home" style={{ textDecoration: "none" }}>
                    <Button className={classes.links} color="primary">
                      Link
                    </Button>
                  </NavLink>
                  <NavLink exact to="/home" style={{ textDecoration: "none" }}>
                    <Button className={classes.links} color="primary">
                      Home
                    </Button>
                  </NavLink>
                  <NavLink exact to="/home" style={{ textDecoration: "none" }}>
                    <Button className={classes.links} color="primary">
                      Services
                    </Button>
                  </NavLink>
                  <NavLink
                    exact
                    to="/home"
                    style={{ textDecoration: "none" }}
                    className={classes.login}
                  >
                    <Button
                      className={classes.links}
                      variant="contained"
                      color="primary"
                    >
                      Contact
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid container className={classes.cover}>
          <Grid item className={classes.topSection}>
            <Grid item className={classes.text}>
              <Typography gutterBottom variant="h3">
                Lorem ipsum verde est nula mente cuanti tanti fungui non sapiamo
              </Typography>
              <br></br>
              <Typography variant="h5" gutterBottom>
                No sapiamo cuanti pero tardi o protni fariamo qui
              </Typography>
            </Grid>

            <Grid item className={classes.search}>
              <form
                noValidate
                autoComplete="off"
                className={classes.searchForm}
              >
                <TextField
                  id="outlined-basic"
                  label="Search City"
                  variant="outlined"
                  className={classes.inputSearch}
                />
                <IconButton
                  type="submit"
                  className={classes.button}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </Grid>
          </Grid>

          <Grid item className={classes.bottomSection}>
            <Grid Item className={classes.popular}>
              <h1 className={classes.h1}>Buy</h1>
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
            <Grid Item className={classes.popular}>
              <h1 className={classes.h1}>Rent</h1>

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
