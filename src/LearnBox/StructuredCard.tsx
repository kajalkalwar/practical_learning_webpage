import { Card, CardContent, Stack } from "@mui/material";

import { StructuredLearningInterface } from "../data/interface";
import { useStyles } from "./StructuredCardStyles";
interface IProps {
  item: StructuredLearningInterface;
}
const StructuredCard: React.FC<IProps> = (props) => {
  // console.log(props, "hello");
  const classes = useStyles();

  const { id, icon, icon1, title, section } = props.item;

  return (
    <Stack>
      <Card key={id} className={classes.mainCard}>
        <CardContent className={classes.cardContent}>
          <Stack className={classes.iconContainer}>
            <span className={classes.svgImage}>{icon}</span>
          </Stack>
          <Stack className={classes.titles}>
            <span style={{ fontSize: "6px" }}>{section}</span>
            <span>{title}</span>
          </Stack>
          <Stack>
            <span className={classes.svgImage1}>{icon1}</span>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default StructuredCard;
