import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { CalendarInterface } from "../data/interface";
import { useStyles } from "../LearnBox/CalenderCardStyles";

interface IProps {
  item: CalendarInterface;
}
const CalendarCard: React.FC<IProps> = (props) => {
  console.log(props, "Props");
  const classes = useStyles();
  const { id, day, num, time } = props.item;
  return (
    <Stack>
      <Grid item key={id} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.cardBorder}></Typography>
            <Stack margin="10px 0px">
              <Typography className={classes.cardDetails}>
                {day}
              </Typography>
              <Typography className={classes.cardDetails}>
                {num}
              </Typography>
            </Stack>
            {time.map((item) => (
              <Typography className={classes.cardTime}>
                {item}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Stack>
  );
};

export default CalendarCard;
