import { Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Footer/FooterStyles";
//@ts-ignore
import image2 from "../Assets/image2.svg";
//@ts-ignore
import lock from "../Assets/lock.png";
//@ts-ignore
import phone from "../Assets/phone.png";
//@ts-ignore
import inbox from "../Assets/inbox.png";

//@ts-ignore
import facebook from "../Assets/facebook.png";

//@ts-ignore
import twitter from "../Assets/twitter.png";

//@ts-ignore
import insta from "../Assets/insta.png";

//@ts-ignore
import linkedin from "../Assets/linkedin.png";

//@ts-ignore
import ring from "../Assets/ring.png";

const Footer = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Stack className={classes.container}>
        <Stack>
          <img
            src={image2}
            height="50px"
            width="343px"
            alt="image2"
          />
          <Typography className={classes.para}>
            LearnInbox Paltform Doesn't Guarantee On Your
          </Typography>
          <Typography className={classes.para}>
            Academic Success. LearnInbox Intended To Start
          </Typography>
          <Typography className={classes.para}>
            Your Own Research And Development.
          </Typography>
          <Stack className={classes.lock}>
            <Stack>
              <img src={lock} height="72px" width="62px" alt="lock" />
            </Stack>
            <Stack className={classes.details}>
              <Typography className={classes.info}>
                Your Information Is Protected By
              </Typography>
              <Typography className={classes.info}>
                256-Bit SSL Encryption
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Typography className={classes.info}>Legal</Typography>
          <ul>
            <li className={classes.list1}>Privacy Policy</li>
            <li className={classes.list1}>Treams & Conditions</li>
            <li className={classes.list1}>Disclaimer</li>
            <li className={classes.list1}>
              Refund & Cancellation Policy
            </li>
            <li className={classes.list1}>Academic Integrity</li>
          </ul>
        </Stack>
        <Stack>
          <Typography className={classes.info}>
            Work With Us
          </Typography>
          <ul>
            <li className={classes.list1}>Become A Writer</li>
            <li className={classes.list1}>Become A Mentor</li>
            <li className={classes.list1}>Become A R&D Mentor</li>
            <li className={classes.list1}>Become A Developer</li>
            <li className={classes.list1}>Become A Trainer</li>
            <li className={classes.list1}>Become A Instructor</li>
          </ul>
        </Stack>
        <Stack>
          <Typography className={classes.info}>Products</Typography>
          <ul>
            <li className={classes.list1}>Coding Services</li>
            <li className={classes.list1}>Kids-Box</li>
            <li className={classes.list1}>Project Champ</li>
            <li className={classes.list1}>Project Hackathon</li>
          </ul>
        </Stack>
        <Stack>
          <Typography className={classes.info}>Learninbox</Typography>
          <ul>
            <li className={classes.list1}>About Us</li>
            <li className={classes.list1}>Blog</li>
            <li className={classes.list1}>ContactUs</li>
            <li className={classes.list1}>Events</li>
            <li className={classes.list1}>Careers</li>
          </ul>
        </Stack>
      </Stack>

      <Stack className={classes.social}>
        <Stack className={classes.media}>
          <img src={phone} height="46px" width="46px" alt="phone" />
          <Typography className={classes.heading}>
            1800 833 21115
          </Typography>
        </Stack>
        <Stack className={classes.media}>
          <img src={inbox} height="41px" width="55px" alt="inbox" />
          <Typography className={classes.heading}>
            Mailto:Support@Learninbox.Com15
          </Typography>
        </Stack>
        <Stack className={classes.list}>
          <Stack className={classes.twitter} marginRight="20px">
            <img src={ring} alt="ring" />
            <img
              src={twitter}
              height="25px"
              width="31px"
              className={classes.img}
              alt="twitter"
            />
          </Stack>
          <Stack marginRight="20px">
            <img src={facebook} alt="facebook" />
          </Stack>
          <Stack marginRight="20px">
            <img src={linkedin} alt="linkedin" />
          </Stack>
          <Stack marginRight="20px">
            <img src={insta} alt="insta" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
