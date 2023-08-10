import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  gridItem: {
    marginRight: "8px !important",
  },
  cardBorder: {
    borderTop: "4px solid #5db1bb",
    // width: "60px",
  },
  cardDetails: {
    fontWeight: "bold !important",
  },

  cardTime: {
    margin: "8px 0px !important",
    color: "#5db1bb !important",
    fontWeight: "500 !important",
  },
  card: {
    textAlign: "center",
    transition: "transform 0.5s ease-in-out",
    padding: "5px !important",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s ease-in-out",
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.4) !important",
    },
  },
});
