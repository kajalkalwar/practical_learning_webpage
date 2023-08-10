import React from "react";
import { useStyles } from "./JourneyToLearnStyles";
//@ts-ignore
import girl from "../Assets/girl.png";
//@ts-ignore
import bulb1 from "../Assets/bulb1.png";
//@ts-ignore
import circle from "../Assets/circle.png";
//@ts-ignore
import polygon from "../Assets/polygon.png";
//@ts-ignore
import ellipse4 from "../Assets/ellipse4.png";
//@ts-ignore
import rect from "../Assets/rect.png";
//@ts-ignore
import rect1 from "../Assets/rect1.png";
import { Stack } from "@mui/material";

const Learning = () => {
  const classes = useStyles();
  return (
    <div>
      <Stack className={classes.image}>
        <img className={classes.image1} src={girl} alt="girl" />
        <img src={circle} alt="circle" height="564px" width="564px" />
      </Stack>
      <Stack className={classes.imageContainer}>
        <img
          className={classes.bulb1}
          src={bulb1}
          height="50px"
          width="50px"
          alt="bulb with yellow"
        />
        <img
          className={classes.polygon}
          src={polygon}
          height="33px"
          width="33px"
          alt="polygon with rect"
        />
        <img
          className={classes.ellipse}
          src={ellipse4}
          height="28px"
          width="28px"
          alt="ellipse with circle"
        />
      </Stack>
      <Stack className={classes.rect}>
        <img
          src={rect}
          height="70px"
          width="70px"
          alt="rect with rectangle"
        />
        <img
          className={classes.rect1}
          src={rect1}
          height="28px"
          width="32px"
          alt="rect1"
        />
      </Stack>
    </div>
  );
};

export default Learning;
