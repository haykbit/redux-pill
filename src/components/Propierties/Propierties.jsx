import { useDispatch } from "react-redux"

import {
  getPropierties,
  userFavPropierties,
  filterPropierties,
} from '../../redux/counter/actions';

import useStyles from "./style";
import { Grid, Card, CardActions, CardContent, Button, Typography, CardMedia, Paper, ButtonBase, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const CounterControls = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const HandleGetPropierties = () => {
    dispatch(getPropierties());
  }

  const HandleUserFavPropierties = () => {
    dispatch(userFavPropierties());
  }

  const HandleFilterPropierties = () => {
    dispatch(filterPropierties());
  }
  return (
    <>
      <button onClick={HandleGetPropierties}>GET</button>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.media} alt="complex" src="https://i.pinimg.com/originals/bb/7a/00/bb7a00b1cdccd419d6bad81cc2707669.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$190.000</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item >
              <ButtonBase className={classes.image}>
                <img className={classes.media} alt="complex" src="https://i.pinimg.com/originals/bb/7a/00/bb7a00b1cdccd419d6bad81cc2707669.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$190.000</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/*<button onClick={HandleUserFavPropierties}>FAV</button>
      <button onClick={HandleFilterPropierties}>FILTER</button>*/}
    </>
  )
}

export default CounterControls;