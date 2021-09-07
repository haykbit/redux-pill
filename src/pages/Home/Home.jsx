import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Card, InputBase, CardActions, CardContent, Button, Typography, CardMedia, FormControl, Paper, ButtonBase, IconButton, AppBar, Toolbar } from '@material-ui/core';

import logo from "../../assets/logo-2.jpg";
import background from "../../assets/back.jpg"
import useStyles from "./style";


function Home() {
  const classes = useStyles();
  
  return (
      <>
        <div className={classes.root}>
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
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }}>
                                <Button className={classes.links} color="primary">
                                    Link
                                </Button>
                            </NavLink>
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }}>
                                <Button className={classes.links} color="primary">
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }}>
                                <Button className={classes.links} color="primary">
                                    Services
                                </Button>
                            </NavLink>
                            <NavLink exact to="/home" style={{ textDecoration: 'none' }} className={classes.login}>
                                <Button className={classes.links} variant="contained" color="primary">
                                    Contact
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container className={classes.cover}>
                
            </Grid>
        </div>
      </>
  );
}

export default Home;