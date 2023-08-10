import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../JoinUs/JoinUsStyles";
//@ts-ignore
import unsplash from "../Assets/unsplash.png";
//@ts-ignore
import image2 from "../Assets/image2.svg";

const JoinUs = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack marginTop="200px" className={classes.container}>
        <img
          src={unsplash}
          height="511px"
          width="100%"
          alt="unsplash"
        />
        <Stack direction="row" className={classes.btn}>
          <Button className={classes.btn2} variant="contained">
            <img
              src={image2}
              height="34px"
              width="240px"
              alt="image2"
            />
          </Button>
        </Stack>
      </Stack>

      <Stack className={classes.details}>
        <Typography className={classes.text}>
          Hundreds Of Thouands
        </Typography>
        <Typography className={classes.text}>
          Students Join Us Monthly
        </Typography>
        <Typography className={classes.para}>
          ...And Achieve Their Learning Goals. With Our Expert Tutors,
          Your Goals
        </Typography>
        <Typography className={classes.para}>
          Are Closer Than Ever!
        </Typography>
        <Stack direction="row">
          <Button className={classes.startbtn} variant="contained">
            Start Learning
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default JoinUs;
