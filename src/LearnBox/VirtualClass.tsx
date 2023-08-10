import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./MentorStyles";
//@ts-ignore


const VirtualClass = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <Stack className={classes.left}>
          <div className={classes.circle}>
            <h4>3</h4>
          </div>
          <Stack marginLeft="15px">
            <Typography className={classes.para}>
              Enter Virtual Classroom
              <Typography className={classes.para}>
                When It's Lesson Time, Connect With Your Tutor Through
                Our Comprehensive
              </Typography>
              Video Platform
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Paper>
            {/* <video width="465px" controls>
              <source src={video} type="video/mp4" />
            </video> */}
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VirtualClass;
