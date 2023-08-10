//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "60px 80px",
  },

  heading: {
    fontSize: "38px !important",
    fontWeight: "900 !important",
    padding: "8px",
  },

  btn: {
    background: "black !important",
    height: "60px",
    textTransform: "capitalize !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    width: "180px !important",
    borderRadius: "10px !important",
  },

  image: {
    position: "relative",
  },
  image1: {
    position: "absolute",
    right: "40px",
    top: "80px",
  },

  imageContainer: {
    position: "relative",
  },

  bulb1: {
    position: "absolute",
    bottom: "475px",
    right: "18px",

    transform: "rotate(32deg)",
  },

  polygon: {
    position: "absolute",
    bottom: "180px",
    right: "-30px",
  },
  ellipse: {
    position: "absolute",
    bottom: "500px",
    left: "95px",
  },

  rect: {
    position: "relative",
    bottom: "160px",
    right: "80px",
  },
  rect1: {
    position: "absolute",
    left: "19px",
    top: "23px",
  },

  mainProgress: {
    position: "relative",
    marginLeft: "40px",
    marginTop: "5px",
  },
  progress: {
    color: "#eaeceb !important",
  },
  progress1: {
    position: "absolute",
    top: "0px",
    left: "1px",
    color: "#e0a5f1 !important",
    transform: "rotate(365deg) !important",
  },
  text: {
    position: "absolute",
    top: "18px",
    fontSize: "14px",
    left: "16px",
    fontWeight: "bold !important",
  },

  line: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
  },
  curve: {
    position: "absolute",
    top: "10px",
    right: "-3px",
  },

  book: {
    background: "#fefaf3 !important",
    color: "#f3993e !important",
    fontSize: "13px",
    fontWeight: "bold",
    position: "absolute",
    transform: "rotate(32deg)",
    bottom: "50px",
    right: "-60px",
    padding: "10px 15px",
    borderRadius: "40px",
  },
});
