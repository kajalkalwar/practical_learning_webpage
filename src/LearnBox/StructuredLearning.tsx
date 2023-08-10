import { Stack, Typography } from "@mui/material";
import { useStyles } from "./MentorStyles";
import { StructuredData } from "../data/data";
import StructuredCard from "./StructuredCard";
import ProgressBar from "../Progress/ProgressBar";

const StructuredLearning = () => {
  const classes = useStyles();

  return (
    <Stack>
      <Stack className={classes.container}>
        <Stack className={classes.left}>
          <div className={classes.circle}>
            <h4>4</h4>
          </div>
          <Stack marginLeft="15px">
            <Typography className={classes.para}>
              Enjoy Structured Learning
              <Typography className={classes.para}>
                Keep Track Of Your Learning Progress.Improve Your
                Speaking And Vocabulary
              </Typography>
              With Our Learning Plans
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Stack>
            {StructuredData.map((item) => {
              return <StructuredCard item={item} />;
            })}
          </Stack>
          <Stack marginLeft="40px">
            <Typography fontWeight="bold" fontSize="30px">
              B2
            </Typography>
            <Typography fontSize="10px">
              Unit 1 Culture and Communication
            </Typography>
            <Typography
              borderTop="2px solid #f0f0ef"
              margin="20px 0px"
            ></Typography>
            <ProgressBar />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StructuredLearning;
