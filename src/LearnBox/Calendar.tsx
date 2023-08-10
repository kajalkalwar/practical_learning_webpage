import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./MentorStyles";
import { CalendarData } from "../data/data";
import CalendarCard from "./CalendarCard";
const Calendar = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <Stack className={classes.left}>
          <div className={classes.circle}>
            <h4>2</h4>
          </div>
          <Stack marginLeft="15px">
            <Typography className={classes.para}>
              Take Lessons Anytime
              <Typography className={classes.para}>
                Find The Perfect Time Of Your Busy Schedule. Book
                Lessons In Second Via
              </Typography>
              Desktop Or Mobile
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Grid container>
            {CalendarData.map((item) => {
              return <CalendarCard item={item} />;
            })}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Calendar;
