import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Button, AppBar, Toolbar } from "@material-ui/core";

import logo from "../../assets/logo-2.jpg";
import useStyles from "./style";

function Navbar() {
  const classes = useStyles();
  let isLoged = true;

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <AppBar className={classes.navbar}>
            <Toolbar>
              <Grid container className={classes.container}>
                <Grid item className={classes.logo}>
                  <NavLink exact to="/">
                    <img
                      src={logo}
                      alt="Houser Logo"
                      height="45px"
                      className={classes.image}
                    />
                  </NavLink>
                </Grid>
                <Grid item className={classes.link}>
                  <NavLink
                    exact
                    to="/propierties"
                    style={{ textDecoration: "none" }}
                  >
                    <Button className={classes.links} color="primary">
                      Propieties
                    </Button>
                  </NavLink>
                  <NavLink
                    exact
                    to="/dashboard"
                    style={{ textDecoration: "none" }}
                  >
                    <Button className={classes.links} color="primary">
                      Dashboard
                    </Button>
                  </NavLink>
                  {!isLoged ? (
                    <p> Hi User! </p>
                  ) : (
                    <NavLink
                      exact
                      to="/Login"
                      style={{ textDecoration: "none" }}
                      className={classes.login}
                    >
                      <Button
                        className={classes.links}
                        variant="contained"
                        color="primary"
                      >
                        Login
                      </Button>
                    </NavLink>
                  )}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    </>
  );
}

export default Navbar;
