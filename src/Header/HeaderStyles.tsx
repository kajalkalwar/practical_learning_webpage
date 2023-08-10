//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    margin: "40px 0px 0px 20px",
    display: "flex",
    alignItems: "center !important",
    // justifyContent: "space-between !important",
    flexDirection: "row !important",
  },

  nav: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    gap: "20px",
    marginLeft: "20px",
    cursor: "pointer !important",
  },
  icon: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    color: "#838383 !important",
  },
  list: {
    textDecoration: "none !important",
    color: "#838383 !important",
    fontSize: "16px !important",
    fontWeight: "500 !important",
  },

  input: {
    background: "#fafafa !important",
    width: "280px",
    padding: "20px",
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-between !important",
    marginLeft: "20px",
    borderRadius: "15px ",
  },
  search: {
    background: "#fafafa !important",
    border: "none",
    color: "#838383 !important",
    fontWeight: "500 !important",
    fontSize: "15px !important",
    width: "100%",
    borderRadius: "15px ",
  },
  logo: {
    color: "#838383 !important",
  },
  image: {
    borderRadius: "10px",
  },

  profile: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center !important",
    alignItems: "center !important",
  },
  details: {
    display: "flex",
    justifyContent: "center !important",
    marginLeft: "10px",
  },

  title: {
    fontWeight: "bold !important",
  },

  name: {
    color: "#838383 !important",
    fontSize: "14px !important",
    marginTop: "5px !important",
  },

  notified: {
    background: "#fafafa !important",
    height: "64px",
    width: "64px",
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center !important",
    borderRadius: "10px",
    color: "#9e5cf2 !important",
    marginLeft: "20px",
    cursor: "pointer !important",
  },
  test: {
    borderRight: "1px solid #f1f1f1 !important",
    // width: "30px",
    height: "60px",
    // marginRight: "30px !important",
    margin: "0px 50px !important",
  },
});
