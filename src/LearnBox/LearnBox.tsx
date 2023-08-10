import { Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../LearnBox/LearnBoxStyles";
//@ts-ignore
import circleBall from "../Assets/circleBall.png";
//@ts-ignore
import elipse from "../Assets/elipse.png";
import Mentor from "./Mentor";
import Calendar from "./Calendar";
import VirtualClass from "./VirtualClass";
import StructuredLearning from "./StructuredLearning";

const LearnBox = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <img src={elipse} height="56px" width="56px" alt="elipse" />
        <img
          className={classes.image}
          src={circleBall}
          height="36px"
          width="36px"
          alt="circleBall"
        />
        <Stack className={classes.head}>
          <Typography className={classes.title}>
            How
            <span style={{ marginLeft: "10px", color: "#673399" }}>
              Learn
            </span>
            <span style={{ color: "#e73f80", marginRight: "10px" }}>
              InBox
            </span>
            Works
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize="30px">
            Learn Online With The World's Best Mentors
          </Typography>
        </Stack>
      </Stack>
      <Mentor />
      <Calendar />
      <VirtualClass />
      <StructuredLearning />
    </Stack>
  );
};

export default LearnBox;
