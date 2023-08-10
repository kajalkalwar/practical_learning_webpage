import { Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./MentorStyles";
import { Section1Data } from "../data/data";
import MentorCard from "./MentorCard";
const Section1 = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <Stack className={classes.left}>
          <div className={classes.circle}>
            <h4>1</h4>
          </div>
          <Stack marginLeft="15px">
            <Typography className={classes.para}>
              Find The Best Mentor
              <Typography className={classes.para}>
                Choose From Over 32,000 Online Tutor's. Use Filter To
              </Typography>
              Narrow Your Search And Find The Perfect Fit
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          {Section1Data.map((data) => {
            return <MentorCard data={data} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section1;
