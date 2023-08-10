import { Link, Stack, Typography } from "@mui/material";
//@ts-ignore
import image2 from "../Assets/image2.svg";
//@ts-ignore
import profile from "../Assets/profile.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useStyles } from "./HeaderStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <Stack className={classes.main}>
      {/* /--------------------------------------/ */}
      <Stack>
        <img src={image2} alt="image2" width="300px" height="43px" />
      </Stack>

      {/* /--------------------------------------/ */}
      <Stack className={classes.nav}>
        <Stack className={classes.icon}>
          <Link className={classes.list}>Categories</Link>
          {<KeyboardArrowDownIcon />}
        </Stack>
        <Link className={classes.list}>Teach</Link>
        <Link className={classes.list}>Contact Us</Link>
        <Link className={classes.list}>About Us</Link>
      </Stack>
      {/* /--------------------------------------/ */}
      <Stack direction="row" className={classes.input}>
        <input
          className={classes.search}
          type="text"
          placeholder="Search Anything"
        />
        <Stack className={classes.logo}>{<SearchIcon />}</Stack>
      </Stack>

      {/* /--------------------------------------/ */}
      <Typography className={classes.test}></Typography>

      {/* /--------------------------------------/ */}
      <Stack className={classes.profile}>
        <img
          className={classes.image}
          src={profile}
          height="64px"
          width="64px"
          alt="profile"
        />

        <Stack className={classes.details}>
          <Typography className={classes.title}>
            Behzad Pashaei
          </Typography>
          <Typography className={classes.name}>
            Ui & Ux Designer
          </Typography>
        </Stack>
      </Stack>

      {/* /--------------------------------------/ */}
      <Stack className={classes.notified}>
        <Stack>{<NotificationsIcon />}</Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
