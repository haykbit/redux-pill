import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Button, AppBar, Toolbar } from "@material-ui/core";

import logo from "../../assets/logo-2.jpg";
import useStyles from "./style";

function Navbar() {
  const classes = useStyles();

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
                  <NavLink exact to="/" style={{ textDecoration: "none" }}>
                    <Button className={classes.links} color="primary">
                      Link
                    </Button>
                  </NavLink>
                  <NavLink exact to="/" style={{ textDecoration: "none" }}>
                    <Button className={classes.links} color="primary">
                      Home
                    </Button>
                  </NavLink>
                  <NavLink exact to="/" style={{ textDecoration: "none" }}>
                    <Button className={classes.links} color="primary">
                      Services
                    </Button>
                  </NavLink>
                  <NavLink
                    exact
                    to="/"
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
      </div>
    </>
  );
}

export default Navbar;
