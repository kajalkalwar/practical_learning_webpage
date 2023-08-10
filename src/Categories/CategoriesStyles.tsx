//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    position: "relative",
  },

  form: {
    display: "flex",
    justifyContent: "center !important",
    flexDirection: "row !important",
    alignItems: "center",
    position: "absolute",
    left: "10px",
    width: "100%",
    top: "1020px",
  },

  search: {
    position: "relative",
    height: "64px",
    width: "810px",
  },
  btn: {
    position: "absolute",
    top: "12px",
    left: "150px",
    background: "black !important",
    textTransform: "capitalize !important",
    height: "40px",
    borderRadius: "10px !important",
    padding: "0px 40px !important",
  },

  input: {
    width: "100%",
    height: "100%",
    border: "none",
    background: "#fafafa",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
    paddingLeft: "160px",
  },

  icon: {
    position: "absolute",
    top: "20px",
    right: "0",
    color: "#838383 !important",
    fontSize: "30px !important",
    fontWeight: "bold !important",
    paddingRight: "10px",
  },
  para: {
    color: "#6e6565",
    marginLeft: "20px !important",
  },

  list: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row !important",
    alignItems: "center",
    marginTop: "100px",
    paddingLeft: "100px",
  },

  list1: {
    color: "#7f7f7f !important",
    margin: "20px !important",
    fontSize: "30px !important",
    fontWeight: "500 !important",
  },
});
