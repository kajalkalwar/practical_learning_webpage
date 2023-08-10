import { CircularProgress, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useStyles } from "./ProgressStyles";

const ProgressBar = () => {
  const classes = useStyles();
  const [number] = useState(100);
  const [progress] = useState(58);

  return (
    <div>
      <div className={classes.mainProgress}>
        <CircularProgress
          variant="determinate"
          value={number}
          size={100}
          thickness={4}
          className={classes.progress}
        />
        <CircularProgress
          className={classes.progress1}
          variant="determinate"
          value={progress}
          size={100}
          thickness={4}
        />
        <Stack className={classes.text}>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            58%
          </span>
          <span>Compeleted</span>
        </Stack>
      </div>
    </div>
  );
};

export default ProgressBar;
