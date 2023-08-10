//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: "200px",
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-evenly",
  },
  para: {
    fontSize: "18px !important",
    fontWeight: "bold !important",
    marginTop: "12px !important",
    marginBottom: "20px !important",
  },

  lock: {
    display: "flex",
    flexDirection: "row !important",
  },

  details: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "15px",
    marginTop: "20px",
  },
  info: {
    fontSize: "18px !important",
    fontWeight: "bold !important",
  },

  list1: {
    fontSize: "18px !important",
    fontWeight: "bold !important",
    marginTop: "40px !important",
    textDecoration: " 2px underline",
    cursor: "pointer !important",
    color: "#5fa6f8 !important",
    listStyleType: "none",
  },

  social: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-around",
    margin: "40px 0px",
  },

  media: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer !important",
  },

  heading: {
    fontSize: "30px !important",
    fontWeight: "bold !important",
    marginLeft: "15px !important",
  },

  list: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    alignItems: "center",
  },

  twitter: {
    position: "relative",
  },

  img: {
    position: "absolute",
    top: "22px",
    left: "20px",
  },
});
