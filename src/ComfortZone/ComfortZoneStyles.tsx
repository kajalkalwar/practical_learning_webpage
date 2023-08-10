//@ts-nocheck

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    position: "absolute",
    top: "8px",
  },

  list: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-evenly !important",
    // justifyContent: "center !important",
    alignItems: "center",
    margin: "50px  40px ",
  },

  circle1: {
    height: "70px",
    width: "70px",
    border: "5px solid #4cb4bf",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle2: {
    height: "54px",
    width: "54px",
    border: "5px solid #4cb4bf",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle3: {
    height: "30px",
    width: "30px",
    border: "3px solid #4cb4bf",
    borderRadius: "50%",
  },

  list1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  dot: {
    position: "absolute",
    top: "18px",
  },

  head: {
    fontSize: "32px !important",
    fontWeight: "bold !important",
    color: "#535353 !important",
    marginBottom: "10px !important",
    marginTop: "8px !important",
  },

  para: {
    fontSize: "20px !important",
    fontWeight: "500 !important",
    textAlign: "center",
    marginBottom: "10px !important",
  },
});
