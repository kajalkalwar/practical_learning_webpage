import {
  CalendarInterface,
  Section1Interface,
  StructuredLearningInterface,
} from "./interface";
//@ts-ignore
import p1 from "../Assets/p1.png";
//@ts-ignore
import p2 from "../Assets/p2.png";
//@ts-ignore
import p3 from "../Assets/p3.png";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SchoolIcon from "@mui/icons-material/School";
import GradeIcon from "@mui/icons-material/Grade";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import CircleIcon from "@mui/icons-material/Circle";
import SmsIcon from "@mui/icons-material/Sms";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Section1Data: Section1Interface[] = [
  {
    id: "1",
    image: p1,
    title: "Miriam.V",
    icon1: <VerifiedUserIcon />,
    icon2: <SchoolIcon />,
    heading: "English Language",
    number: "918",
    subHead1: "Lesions",
    subHead2: "Speaks",
    subHead3: "English",
    subHead4: "Native",
    para1: " Certified EFL TeacherWith 6 Years Experience",
    para2: "Do You Want To Communicate Artificially",
    para3: "High Level Technical Vocabulary. Are You",
    icon3: "",
    rating: "5.0",
    reviews: "26 Reviews",
    dollar: "$18",
    time: "Per Hour",
    icon4: <OfflineBoltIcon />,
    btnHead: "Best Trial Lesson",
    icon5: <CircleIcon />,
  },
  {
    id: "2",
    image: p2,
    title: "Miriam.V",
    icon1: <VerifiedUserIcon />,
    icon2: <SchoolIcon />,
    heading: "English Language",
    number: "918",
    subHead1: "Lesions",
    subHead2: "Speaks",
    subHead3: "English",
    subHead4: "Native",
    para1: " Certified EFL TeacherWith 6 Years Experience",
    para2: "Do You Want To Communicate Artificially",
    para3: "High Level Technical Vocabulary. Are You",
    icon3: <GradeIcon />,
    rating: "5.0",
    reviews: "26 Reviews",
    dollar: "$18",
    time: "Per Hour",
    icon4: <OfflineBoltIcon />,
    btnHead: "Best Trial Lesson",
    icon5: <CircleIcon />,
  },
  {
    id: "3",
    image: p3,
    title: "Miriam.V",
    icon1: <VerifiedUserIcon />,
    icon2: <SchoolIcon />,
    heading: "English Language",
    number: "918",
    subHead1: "Lesions",
    subHead2: "Speaks",
    subHead3: "English",
    subHead4: "Native",
    para1: " Certified EFL TeacherWith 6 Years Experience",
    para2: "Do You Want To Communicate Artificially",
    para3: "High Level Technical Vocabulary. Are You",
    icon3: "",
    rating: "5.0",
    reviews: "26 Reviews",
    dollar: "$18",
    time: "Per Hour",
    icon4: <OfflineBoltIcon />,
    btnHead: "Best Trial Lesson",
    icon5: <CircleIcon />,
  },
];

export const CalendarData: CalendarInterface[] = [
  {
    id: "1",
    day: "Fri",
    num: "8",
    time: ["14:30", "15:00", "15:30", "16:00"],
  },
  {
    id: "2",
    day: "Sat",
    num: "9",
    time: ["13:30", "13:00", "14:00", "14:30"],
  },
  {
    id: "3",
    day: "Sun",
    num: "10",
    time: ["13:30", "13:00", "14:00", "14:30"],
  },
  {
    id: "4",
    day: "Mon",
    num: "11",
    time: ["13:30", "13:00", "14:00", "14:30"],
  },
  {
    id: "5",
    day: "Tue",
    num: "12",
    time: ["13:30", "13:00", "14:00", "14:30"],
  },
];

export const StructuredData: StructuredLearningInterface[] = [
  {
    id: "1",
    icon: <SmsIcon />,
    icon1: <CheckCircleIcon />,
    section: "Section 7",
    title: "Vocabulary Practice:Express yourself",
  },
  {
    id: "2",
    icon: <SmsIcon />,
    icon1: <CheckCircleIcon />,
    section: "Section 8",
    title: "Grammar Review:Modal verbs",
  },
  {
    id: "3",
    icon: <SmsIcon />,
    icon1: <CheckCircleIcon />,
    section: "Section 9",
    title: "Grammar Practice:Modal verbs",
  },
  {
    id: "4",
    icon: <SmsIcon />,
    icon1: <CheckCircleIcon />,
    section: "Section 10",
    title: "Fluency:What can you do?",
  },
  {
    id: "5",
    icon: <SmsIcon />,
    icon1: <CheckCircleIcon />,
    section: "Section 11",
    title: "Grammar Review:Past simple",
  },
];
