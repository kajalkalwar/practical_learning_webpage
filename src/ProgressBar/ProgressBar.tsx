import React, { useState } from "react";
import { Circle, Line } from "rc-progress";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const handleDecrease = () => {
    if (percentage === 0) {
    } else {
      setPercentage(percentage - 1);
    }
  };
  return (
    <div>
      Percentage:{percentage}
      <Line
        percent={percentage}
        strokeColor="lightblue"
        strokeWidth={2}
        trailColor="blue"
        trailWidth={2}
        strokeLinecap="round"
      />
      <div style={{ marginTop: "20px", height: 130, width: 130 }}>
        <Circle
          percent={percentage}
          strokeColor="lightblue"
          strokeWidth={4}
          trailColor="blue"
          trailWidth={4}
          strokeLinecap="round"
          gapPosition="bottom"
          gapDegree={20}
        />
        <button onClick={() => setPercentage(percentage + 1)}>
          Increase
        </button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};

export default ProgressBar;
