//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "40px",
    // marginLeft: "100px",
  },
  left: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
  },
  circle: {
    height: "32px",
    width: "32px",
    background: "#bcdee1 !important",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  para: {
    fontSize: "19px !important",
    fontWeight: "bold !important",
  },

  right: {
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 20px 4px 4px",
    gap: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.3)",
      transition: "transform 0.5s ease-in-out",
      "& button": {
        background: "#d9d9d9",
        border: "1px solid #4cb4bf",
      },
    },
  },

  svgTag: {
    "& svg": {
      fontSize: "10px",
      lineHeight: "1.5",
      color: "#4cb4bf",
    },
  },
  svgIcon: {
    "& svg": {
      fontSize: "8px",
      lineHeight: "1.5",
      color: "#a09a9a",
    },
  },

  typoTag: {
    color: "#5fb198",
  },

  list: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    gap: "8px",
    fontSize: "10px",
  },

  reviewDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  reviewData: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "9px",
    gap: "20px",
    paddingTop: "10px",
  },

  svgIcon1: {
    "& svg": {
      fontSize: "10px",
      lineHeight: "1.5",
      color: "#f7c850",
    },
  },

  review: {
    textAlign: "center",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btn1: {
    background: "#4cb4bf !important",
    border: "none",
    color: "#fff",
    fontSize: "7px !important",
    textTransform: "capitalize !important",
    width: "90px",
  },

  svgIcon2: {
    "& svg": {
      fontSize: "10px",
      color: "#f7c850",
    },
  },

  btn2: {
    border: "none",
    color: "#111 !important",
    fontSize: "7px !important",
    textTransform: "capitalize !important",
    width: "90px",
    marginTop: "5px !important",
    marginBottom: "10px !important",
  },
});
