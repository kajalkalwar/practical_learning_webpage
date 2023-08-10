import { Stack, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import round1 from "../Assets/round1.png";
//@ts-ignore
import round2 from "../Assets/round2.png";
//@ts-ignore
import boy from "../Assets/boy.png";
import { useStyles } from "../Satisfaction/SatisfactionStyles";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
const Satisfaction = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <img src={round1} height="102px" width="102px" alt="round1" />
        <img
          className={classes.image}
          src={round2}
          height="30px"
          width="30px"
          alt="round2"
        />
        <Typography
          fontSize="36px"
          fontWeight="bold"
          margin="20px 0px"
        >
          100% Satisfaction Guarantee
        </Typography>
        <Typography className={classes.para} marginBottom="20px">
          If You Are Not Satisfied With Your Trial Lesson, We Will
          Give You A Free
        </Typography>
        <Typography className={classes.para}>
          Replacement With Another Mentor Or A Full Refund
        </Typography>
      </Stack>

      <Stack className={classes.container2}>
        <Typography className={classes.head}>
          Mentor With <span className={classes.text}>Learn</span>
          <span className={classes.text1}>Inbox</span>
        </Typography>
        <Typography className={classes.para1}>
          Earn Money Sharing Your Expert Knowledge With Students. Sign
          Up To
        </Typography>
        <Typography className={classes.para1}>
          Start Tutoring Online With Preply.
        </Typography>

        <Stack className={classes.content}>
          <Stack className={classes.icon}>
            <SearchIcon className={classes.icon2} />
            <Typography fontSize="28px">Find New Students</Typography>
          </Stack>
          <Stack className={classes.icon}>
            <CalendarTodayIcon className={classes.icon2} />
            <Typography fontSize="28px">
              Grow Your Business
            </Typography>
          </Stack>
          <Stack className={classes.icon}>
            <MonetizationOnIcon className={classes.icon2} />
            <Typography fontSize="28px">
              Grow Your Business
            </Typography>
          </Stack>

          <Stack className={classes.image1}>
            <img src={boy} height="424px" width="632px" alt="boy" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Satisfaction;
