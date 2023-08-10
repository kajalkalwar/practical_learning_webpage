import { Stack, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import grade from "../Assets/grade.png";

//@ts-ignore
import bookMark from "../Assets/bookMark.png";
//@ts-ignore
import clock from "../Assets/clock.png";
//@ts-ignore
import spark from "../Assets/spark.png";
//@ts-ignore
import location from "../Assets/location.png";
import { useStyles } from "../FocusSkill/FocusSkillStyles";

const FocusSkill = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.main}>
        <img src={grade} height="75px" width="91px" alt="grade" />
        <Typography className={classes.title}>
          Focus On The Skills You Need
        </Typography>
        <Typography fontSize="30px">
          Prepare To Achieve Your Goals With Private Mentors
        </Typography>
      </Stack>
      {/* //---------------------------// */}
      <Stack className={classes.data}>
        <Stack>
          <Stack className={classes.details}>
            <Stack>
              <img
                src={bookMark}
                height="30px"
                width="25px"
                alt="bookMark"
              />
            </Stack>
            <Stack className={classes.heading}>
              <Typography className={classes.head}>
                Immerse Yourself In A New Culture
              </Typography>
              <Typography className={classes.paragraph}>
                Connect With Language Experts From Around The World
              </Typography>
            </Stack>
          </Stack>
          {/* //---------------------------// */}
          <Stack className={classes.details}>
            <Stack>
              <img
                src={clock}
                height="42px"
                width="42px"
                alt="clock"
              />
            </Stack>
            <Stack className={classes.heading}>
              <Typography className={classes.head}>
                Get Expert Help When You Need It
              </Typography>
              <Typography className={classes.paragraph}>
                Learn To Solve Any Problem In Any Language
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* //--------------------------------// */}
        <Stack>
          <Stack className={classes.details}>
            <Stack>
              <img
                src={spark}
                height="36px"
                width="24px"
                alt="spark"
              />
            </Stack>
            <Stack className={classes.heading}>
              <Typography className={classes.head}>
                Succeed In Your Career
              </Typography>
              <Typography className={classes.paragraph}>
                Develope Your Working Vocabulary And Communicate
                Clearly
              </Typography>
            </Stack>
          </Stack>
          {/* //---------------------------// */}
          <Stack>
            <Stack className={classes.details}>
              <Stack>
                <img
                  src={location}
                  height="38px"
                  width="30px"
                  alt="location"
                />
              </Stack>
              <Stack className={classes.heading}>
                <Typography className={classes.head}>
                  Speak Naturally, Always
                </Typography>
                <Typography className={classes.paragraph}>
                  Make A Good Impression And Build trust In Any
                  Language
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FocusSkill;
