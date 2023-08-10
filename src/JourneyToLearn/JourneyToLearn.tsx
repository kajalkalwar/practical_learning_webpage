import {
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useStyles } from "./JourneyToLearnStyles";
import Learning from "./Learning";

//@ts-ignore
import line from "../Assets/line.png";
//@ts-ignore
import curve from "../Assets/curve.png";

const MiddleSection = () => {
  const classes = useStyles();
  const [number] = useState(100);
  const [progress] = useState(79);

  return (
    <>
      <Stack className={classes.container}>
        {/* /--------------------------------------/ */}
        <Stack>
          <Typography className={classes.heading}>
            Practical Learning Journey To
          </Typography>
          <Typography className={classes.heading}>
            Earn With Fun - LearnInBox
          </Typography>
          {/* /--------------------------------------/ */}
          <Stack direction="row" marginTop="100px" marginLeft="80px">
            <Button
              className={classes.btn}
              variant="contained"
              size="medium"
            >
              Start Course Now {<KeyboardArrowRightIcon />}
            </Button>
            <Stack className={classes.mainProgress}>
              <CircularProgress
                variant="determinate"
                value={number}
                size={55}
                thickness={3}
                className={classes.progress}
              />
              <CircularProgress
                className={classes.progress1}
                variant="determinate"
                value={progress}
                size={55}
                thickness={3}
              />
              <Stack className={classes.text}>
                <span>79%</span>
              </Stack>
            </Stack>

            <Stack className={classes.line}>
              <img src={line} alt="line with arrow" />
              <img
                src={curve}
                height="10px"
                width="14px"
                alt="arrow with curve"
                className={classes.curve}
              />
              <span className={classes.book}>Booked</span>
            </Stack>
          </Stack>
        </Stack>
        <Learning />
      </Stack>
    </>
  );
};

export default MiddleSection;
