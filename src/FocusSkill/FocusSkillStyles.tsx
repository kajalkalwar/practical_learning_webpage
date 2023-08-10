//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
  },

  title: {
    fontSize: "38px !important",
    fontWeight: "bold !important",
    margin: "30px 0px !important",
  },

  data: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row !important",
    margin: "50px 0px",
  },

  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row !important",
    marginBottom: "40px",
  },

  heading: {
    marginLeft: "20px",
    marginTop: "25px",
  },

  head: {
    fontSize: "30px !important",
    fontWeight: "bold !important",
    color: "#535353 !important",
  },
  paragraph: {
    fontSize: "20px !important",
    fontWeight: "500 !important",
  },
});
