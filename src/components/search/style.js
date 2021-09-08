import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
 root: {

 },
 textSearch:{
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    width: "60%"
 },
 form: {
     width: "90%"
 },
 iconButton: {
    backgroundColor: "#FFDC00",
    borderRadius: "5px",
    padding: "15px",
    marginTop: "1px",
    marginLeft: "5px"
 },
 button: {
    width: "40%",
    padding: "2%",
    textAlign: "left",
    marginTop: "10px",
    backgroundColor: "#FFFFFF",
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
 }
}))