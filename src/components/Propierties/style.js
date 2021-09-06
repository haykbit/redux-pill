import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: "60%",
    minWidth: "146px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  info: {
    display: "flex",
    flexDirection: "row"
  },
  media: {
    width: "140px",
    height: "90px",
    borderRadius: "3px"
  },
  paper: {
      padding: "2%",
      marginTop: "20px"
  },
}));