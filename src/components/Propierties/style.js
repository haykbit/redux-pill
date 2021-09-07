import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    minWidth: "234px",
    justifyContent: "center",
    flexDirection: "column",
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
      marginBottom: "20px",
      width: "60%"
  },
  toolbarContainer: {
      width: "100%"
  },
  toolbar:{
    width: "100%",
    height: "200px",
    backgroundColor: "#e0e0e0",
    marginBottom: "40px !important"
  },
  listContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  input: {
    width: "80%",
    marginTop: "20px",
    marginBottom: "30px",
    flex: 1,
    padding: "5px",
    backgroundColor: "#e0e0e0"
  },
  inputItem: {
    width: "50%"
  },
  iconButton: {
    marginTop: "-4px !important",
    backgroundColor: "#FFDC00 !important",
    borderRadius: "3px !important",
    padding: "9px !important"
  },
  price: {
    backgroundColor: "#A6FFC1",
    padding: "3px",
    borderRadius: "5px"
  },
  iconItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px"
  },
  iconContainer: {
    marginTop: "10px",
    alignItems: "center"
  }
}));