//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconContainer: {
    position: "relative",
    height: "22px",
    width: "22px",
    borderRadius: "50%",
    background: "#ecf7f8",
  },
  svgImage: {
    position: "absolute",
    left: "6px",
    top: "2px",
    "& svg": {
      color: "#5fb2bb",
      fontSize: "11px",
    },
  },

  titles: {
    display: "flex",
    justifyContent: "center",
    fontSize: "9px",
    color: "#cccccc",
    fontWeight: "bold !important",
  },
  svgImage1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      color: "#6dbb3c",
      fontSize: "15px",
    },
  },

  mainCard: {
    marginBottom: "2px",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s ease-in-out",
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.4) !important",
      "& span": {
        color: "black !important",
      },
      "& svg": {
        color: "#cccccc !important",
      },
    },
  },
});
