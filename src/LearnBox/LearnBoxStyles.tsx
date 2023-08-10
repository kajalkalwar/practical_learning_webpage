//@ts-nocheck
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: "10px",
  },

  head: {
    textTransform: "uppercase",
  },

  title: {
    fontWeight: "bold !important",
    fontSize: "32px !important",
    margin: "20px 0px !important",
  },
});
