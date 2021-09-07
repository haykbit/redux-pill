import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { Grid, Card, InputBase, CardActions, CardContent, Button, Typography, CardMedia, FormControl, Paper, ButtonBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KingBedIcon from '@material-ui/icons/KingBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import CropDinIcon from '@material-ui/icons/CropDin';
import useStyles from "./style";

import {
  getPropierties,
  //userFavPropierties,
  filterPropierties,
} from '../../redux/counter/actions';

const CounterControls = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
   
    HandleGetPropierties();
  },[])
  const state = useSelector((state)=>state.data);
  //console.log(state);
  
  const HandleGetPropierties = () => {
    dispatch(getPropierties());
    
  }
  const console = (state)=>{
    console.log(state);
  }

  // const HandleUserFavPropierties = () => {
  //   dispatch(userFavPropierties());
  // }

  const HandleFilterPropierties = () => {
    dispatch(filterPropierties());
  }
  return (
    <>
      <button onClick={HandleGetPropierties}>GET</button>
      <div className={classes.root}>
        <Grid container>
          <Grid item className={classes.inputItem}>
            <InputBase
              className={classes.input}
              placeholder="Piso Barcelona centro"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container className={classes.toolbarContainer}>
          <Grid item className={classes.toolbar}>
          </Grid>
        </Grid>

        <Grid container className={classes.listContainer}>
        {state.value.map( ( {id, image, province, offer, street, type, description, price, room, bath, size } ) => {
            return (
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item >
                    <ButtonBase className={classes.image}>
                      <img className={classes.media} alt="complex" src={image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {offer} {type} {province}
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
                    <Typography variant="subtitle1" className={classes.price}>190.000,00 €</Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.iconContainer}>
                  <Grid item className={classes.iconItem}>
                    <Typography variant="body2" gutterBottom> 
                      <KingBedIcon color="disabled"/> 
                      <Grid item>{room}</Grid>
                    </Typography>
                  </Grid>
                    
                  <Grid item className={classes.iconItem}>
                    <Typography variant="body2" gutterBottom>
                      <BathtubIcon color="disabled"/> 
                      <Grid item>{bath}</Grid>
                    </Typography>
                  </Grid>

                  <Grid item className={classes.iconItem}>
                    <Typography variant="body2" gutterBottom>                    
                      <CropDinIcon color="disabled"/> 
                      <Grid item>{size} m2</Grid>
                    </Typography>
                  </Grid>
                </Grid>
                
              </Paper>
            )
          })}
        </Grid>
      </div>
      {/*<button onClick={HandleUserFavPropierties}>FAV</button>
      <button onClick={HandleFilterPropierties}>FILTER</button>*/}
    </>
  )
}

export default CounterControls;