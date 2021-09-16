import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    minWidth: "234px",
    justifyContent: "center",
    flexDirection: "column",
    margin: "30px",
    marginTop: "100px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  media: {
    width: "270px",
    height: "200px",
    borderRadius: "3px",
  },
  paper: {
    padding: "2%",
    marginBottom: "20px",
    width: "60%",
  },
  toolbarContainer: {
    width: "100%",
  },
  toolbar: {
    width: "100%",
    marginBottom: "40px !important",
    marginTop: "20px",
  },
  back: {
    marginTop: "10%",
  },
  noData: {
    width: "40%",
    textAlign: "center",
    marginLeft: "30%",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginTop: "20px",
    marginBottom: "30px",
    flex: 1,
    padding: "5px",
    backgroundColor: "#e0e0e0",
  },
  inputItem: {
    width: "50%",
  },
  iconButton: {
    marginTop: "-4px !important",
    backgroundColor: "#FFDC00 !important",
    borderRadius: "3px !important",
    padding: "9px !important",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  offer: {
    padding: "1%",
    color: "#fff",
    backgroundColor: "#FF5151",
    borderRadius: "5px",
  },
  price: {
    backgroundColor: "#A6FFC1",
    padding: "5px 10px 5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  iconItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px",
  },
  iconContainer: {
    marginTop: "10px",
    alignItems: "center",
    textAlign: "center",
  },
}));
