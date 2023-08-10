import { ReactNode } from "react";

export interface Section1Interface {
  id: string;
  image: string;
  title: string;
  icon1: ReactNode;
  icon2: ReactNode;
  heading: string;
  number: string;
  subHead1: string;
  subHead2: string;
  subHead3: string;
  subHead4: string;
  para1: string;
  para2: string;
  para3: string;
  icon3: ReactNode;
  rating: string;
  reviews: string;
  dollar: string;
  time: string;
  icon4: ReactNode;
  btnHead: string;
  icon5: ReactNode;
}

export interface CalendarInterface {
  id: string;
  day: string;
  num: string;
  time: string[];
}

export interface StructuredLearningInterface {
  id: string;
  icon: ReactNode;
  section: string;
  title: string;
  icon1: ReactNode;
}
