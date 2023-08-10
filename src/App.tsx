import "./App.css";
import Categories from "./Categories/Categories";

import ComfortZone from "./ComfortZone/ComfortZone";
import FocusSkill from "./FocusSkill/FocusSkill";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import JoinUs from "./JoinUs/JoinUs";
import LearnBox from "./LearnBox/LearnBox";
import JourneyToLearn from "./JourneyToLearn/JourneyToLearn";

import Satisfaction from "./Satisfaction/Satisfaction";
// import ProgressBar from "./ProgressBar/ProgressBar";

function App() {
  return (
    <div>
      <Header />
      <JourneyToLearn />
      <Categories />
      <ComfortZone />
      <FocusSkill />
      <LearnBox />
      <Satisfaction />
      <JoinUs />
      <Footer />
      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
