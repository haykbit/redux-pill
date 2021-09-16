import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        margin: "0 auto",
        width: "100%",
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
    },
    login: {
        marginLeft: "20px"
    },
  }));