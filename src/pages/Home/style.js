import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/back.jpg"

export default makeStyles(() => ({
  root: {
    margin: "0 auto",
    width: "100%"
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
    height: "600px",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat"
  },
  imageBack: {
      width: "100%",
  }
}));