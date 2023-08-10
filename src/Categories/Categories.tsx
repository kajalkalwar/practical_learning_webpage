import { Button, Stack, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import arrow from "../Assets/arrow.png";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "../Categories/CategoriesStyles";

const Categories = () => {
  const classes = useStyles();
  return (
    <Stack>
      {/* /--------------------------------------/ */}
      <Stack className={classes.container}>
        <Typography fontSize="38px" fontWeight="bold">
          Search Among <span style={{ color: "#b176f2" }}>58340</span>{" "}
          Courses And
        </Typography>
        <Typography
          fontSize="38px"
          fontWeight="bold"
          textAlign="center"
        >
          Find Your Favorite Course
        </Typography>

        {/* /--------------------------------------/ */}
        <Stack className={classes.arrow}>
          <img src={arrow} height="50px" width="50px" alt="arrow" />
        </Stack>
      </Stack>

      {/* /--------------------------------------/ */}
      <Stack className={classes.form}>
        <Stack direction="row" className={classes.search}>
          <Button className={classes.btn} variant="contained">
            Categories
          </Button>
          <input
            className={classes.input}
            type="text"
            placeholder="Search Anything"
          />
          <SearchIcon className={classes.icon} />
        </Stack>

        {/* /--------------------------------------/ */}
        <Stack>
          <Typography className={classes.para}>
            Or View The Following Courses...
          </Typography>
        </Stack>
      </Stack>
      <Stack className={classes.list}>
        <Stack>
          <Typography className={classes.list1}>
            PhD Mentors
          </Typography>
          <Typography className={classes.list1}>
            R&D Mentors
          </Typography>
          <Typography className={classes.list1}>
            Skill Development Mentors
          </Typography>
          <Typography className={classes.list1}>
            Language Mentors
          </Typography>
          <Typography className={classes.list1}>
            Entreprenurship Mentors
          </Typography>
        </Stack>
        <Stack>
          <Typography className={classes.list1}>
            Coding Learning Mentors
          </Typography>
          <Typography className={classes.list1}>
            Project Learning Mentors
          </Typography>
          <Typography className={classes.list1}>
            Career Development Mentors
          </Typography>
          <Typography className={classes.list1}>
            Subject Mentors
          </Typography>
          <Typography className={classes.list1}>
            Courses Mentors
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Categories;
