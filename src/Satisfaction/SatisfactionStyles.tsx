//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "100px",
  },
  image: {
    position: "absolute",
    top: "36px",
    border: "6px solid #fff !important",
    borderRadius: "50%",
  },
  para: {
    fontSize: "28px !important",
  },

  container2: {
    margin: "80px 80px",
  },

  head: {
    color: "#535353",
    fontSize: "32px !important",
    fontWeight: "bold !important",
  },

  text: {
    textTransform: "uppercase",
    color: "#673399",
    fontSize: "32px",
    fontWeight: "bold",
  },

  text1: {
    textTransform: "uppercase",
    color: "#e73f80",
    fontSize: "32px",
    fontWeight: "bold",
  },

  para1: {
    fontSize: "26px !important",
    fontWeight: "500 !important",
    margin: "10px 0px !important",
  },

  content: {
    position: "relative",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row !important",
    color: "#4bb3be !important",
    marginTop: "35px",
  },
  icon2: {
    fontSize: "40px !important",
    marginRight: "10px",
  },

  image1: {
    position: "absolute",
    right: "10px",
    top: "-60px",
  },
});
