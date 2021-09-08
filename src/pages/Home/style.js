import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/back.jpg"

export default makeStyles(() => ({
  root: {
    margin: "0 auto",
    width: "100%",
    height: "100vh",
  },
  navbar: {
      display: "flex",
      backgroundColor: "#FFFFFF",
      height: "80px",
      justifyContent: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    display: "flex",
    alignItems: "center",
    marginLeft: "30px"
  },
  login: {
    marginLeft: "40px"
  },
  cover:{
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat"
  },
  imageBack: {
      width: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: "2%",
    marginTop: "10%"
  },
  search: {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5%"
  },
  searchForm: {
    width: "100%",
    marginLeft: "23%"
  },
  inputSearch: {
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    width: "70%"
  },
  button:{
    backgroundColor: "#FFDC00",
    padding: "15px",
    borderRadius: "3px",
    marginLeft: "5px",
    marginTop: "1px"
  },
  popular: {
    width: "40%",
    height:"32%",
    margin: "2%",
  },
  containerPop:{
    display: "flex"
  },
  item: {
    width: "250px",
    height:"150px",
    backgroundColor: "#FFFFFF",
    marginLeft: "0",
    border: "3px solid #fff",
    borderRadius: "5px",
    margin: "2%"
  },
  h1: {
    color: "#FFFFFF"
  },
  bottomSection: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  topSection: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  offerButton: {

  },
}));