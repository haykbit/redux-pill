import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {},
  textSearch: {
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    width: "68%",
  },
  form: {
    width: "130%",
  },
  iconButton: {
    backgroundColor: "#FFDC00",
    borderRadius: "5px",
    padding: "15px",
    marginTop: "1px",
    marginLeft: "5px",
  },
  button: {
    width: "40%",
    padding: "2%",
    textAlign: "left",
    marginTop: "10px",
    backgroundColor: "#f3f3f3",
    "&:hover": {
      backgroundColor: "#e3e3e3",
      fontWeight: "bold",
    },
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
}));
