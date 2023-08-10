import { Stack, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import earth from "../Assets/earth.png";
//@ts-ignore
import earth2 from "../Assets/earth2.png";
//@ts-ignore
import tutors from "../Assets/tutors.png";
//@ts-ignore
import verified from "../Assets/verified.png";
//@ts-ignore
import user from "../Assets/user.png";

import { useStyles } from "../ComfortZone/ComfortZoneStyles";

const ComfortZone = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <img src={earth} height="65px" width="65px" alt="earth" />
        <img
          className={classes.img}
          src={earth2}
          height="47px"
          width="47px"
          alt="earth2"
        />
        <Typography
          fontSize="40px"
          fontWeight="bold"
          margin="20px 0px"
        >
          Make The World Your Comfort
        </Typography>
        <Typography
          fontSize="40px"
          fontWeight="bold"
          textAlign="center"
        >
          Zone
        </Typography>
        <Typography fontSize="30px" margin="20px 0px">
          Speak Naturally With Professional Online Mentor
        </Typography>
        <Typography fontSize="30px">From 185 Countries</Typography>
      </Stack>

      <Stack className={classes.list}>
        <Stack className={classes.list1}>
          <img src={tutors} height="58px" width="51px" alt="tutors" />
          <Typography className={classes.head}>
            Expert Tutors
          </Typography>
          <Typography className={classes.para}>
            Find Native Speakers And
          </Typography>
          <Typography className={classes.para}>
            Certified Mentors
          </Typography>
        </Stack>

        <Stack className={classes.list1}>
          <img
            src={verified}
            height="58px"
            width="47px"
            alt="verified"
          />
          <Typography className={classes.head}>
            Verified Profiles
          </Typography>
          <Typography className={classes.para}>
            We Carefully Check And Confirm Each
          </Typography>
          <Typography className={classes.para}>
            Mentor's Profile
          </Typography>
        </Stack>

        <Stack className={classes.list1}>
          <img src={user} height="70px" width="70px" alt="user" />
          <img
            className={classes.dot}
            src={earth}
            height="25px"
            width="25px"
            alt="earth"
          />
          <Typography className={classes.head}>
            Learn Anything
          </Typography>
          <Typography className={classes.para}>
            Take Online Lessons At The Perfect
          </Typography>
          <Typography className={classes.para}>
            Time For Your Busy Schedule
          </Typography>
        </Stack>

        <Stack className={classes.list1}>
          <div className={classes.circle1}>
            <div className={classes.circle2}>
              <div className={classes.circle3}></div>
            </div>
          </div>
          <Typography className={classes.head}>
            Affordable Prices
          </Typography>
          <Typography className={classes.para}>
            Choose An Experienced Mentor
          </Typography>
          <Typography className={classes.para}>
            Your Budget
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ComfortZone;
