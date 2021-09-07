import { TextField } from '@material-ui/core';
import useStyles from "./style";
function inputText(){
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    )
}