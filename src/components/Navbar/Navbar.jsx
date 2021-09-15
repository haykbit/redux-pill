import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Grid, Button, AppBar, Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import logo from "../../assets/logo-2.jpg";
import useStyles from "./style";

function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const sessionState = useSelector((state) => state.sessionReducer.value);

  useEffect(() => {
    console.log("sessionstate", sessionState);
    // history.push("/");
  }, []);
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
                  {!localStorage.getItem("token") ? (
                    <>
                      <NavLink
                        exact
                        to="/login"
                        style={{ textDecoration: "none" }}
                        className={classes.login}
                      >
                        <Button
                          className={classes.links}
                          variant="endIcon"
                          color="default"
                        >
                          LOGIN
                        </Button>
                      </NavLink>
                      <NavLink
                        exact
                        to="/register"
                        style={{ textDecoration: "none" }}
                        className={classes.login}
                      >
                        <Button
                          className={classes.links}
                          variant="endIcon"
                          color="default"
                        >
                          REGISTER
                        </Button>
                      </NavLink>
                    </>
                  ) : (
                    <NavLink
                      exact
                      to="/logout"
                      style={{ textDecoration: "none" }}
                      className={classes.login}
                    >
                      <Button
                        className={classes.links}
                        variant="endIcon"
                        color="default"
                      >
                        LOGOUT
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
