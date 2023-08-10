//@ts-nocheck

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {},
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  btn2: {
    height: "55px",
    width: "276px",
    background: "#fefafa !important",
    top: "-30px",
    borderRadius: "10px !important",
    boxShadow: "2px 5px 5px rgba(0,0,0,0.4) !important",
  },

  details: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: "38px !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
  },

  para: {
    fontSize: "24px !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
  },

  startbtn: {
    background: "#4bb3be !important",
    textTransform: "capitalize !important",
    height: "96px",
    width: "414px",
    fontSize: "30px !important",
    fontWeight: "bold !important",
  },
});
