import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useStyles } from "./MentorStyles";
import { Section1Interface } from "../data/interface";
interface IProps {
  data: Section1Interface;
}
const MentorCard: React.FC<IProps> = (props) => {
  console.log(props, "props");
  const {
    id,
    image,
    title,
    icon1,
    icon2,
    icon3,
    icon4,
    heading,
    subHead1,
    subHead2,
    subHead3,
    subHead4,
    number,
    btnHead,
    icon5,
    para1,
    para2,
    para3,
    reviews,
    rating,
    dollar,
    time,
  } = props.data;
  const classes = useStyles();
  return (
    <Box key={id}>
      <Stack className={classes.right}>
        <Stack>
          <img
            src={image}
            height="100px"
            width="106px"
            alt="profile images"
          />
        </Stack>
        <Stack>
          <Typography fontSize="12px" fontWeight="bold">
            {title}
            <span className={classes.svgTag}>{icon1}</span>
          </Typography>
          <Typography fontSize="10px">
            <span className={classes.svgTag}>{icon2} </span>
            {heading}
          </Typography>

          <Stack className={classes.list}>
            <span>{number}</span>
            <span>{subHead1}</span>
            <span>
              <span className={classes.svgIcon}>{icon5}</span>
              {subHead2}
            </span>
            <span>{subHead3}</span>
            <span className={classes.typoTag}>{subHead4}</span>
          </Stack>
          <Stack sx={{ fontSize: "10px" }}>
            <span>{para1}</span>
            <span>{para2}</span>
            <span>{para3}</span>
          </Stack>
        </Stack>
        <Stack className={classes.reviewDetails}>
          <Stack className={classes.reviewData}>
            <Stack className={classes.svgIcon1}>{icon3}</Stack>
            <Stack>
              <span className={classes.review}>{rating}</span>
              <span>{reviews}</span>
            </Stack>
            <Stack>
              <span className={classes.review}>{dollar}</span>
              <span>{time}</span>
            </Stack>
          </Stack>
          <Stack marginTop="10px" className={classes.buttons}>
            <Stack>
              <Button
                className={classes.btn1}
                variant="contained"
                size="small"
              >
                <span className={classes.svgIcon2}>{icon4}</span>
                {btnHead}
              </Button>
            </Stack>
            <Stack>
              <Button
                variant="text"
                size="small"
                className={classes.btn2}
              >
                {btnHead}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MentorCard;
