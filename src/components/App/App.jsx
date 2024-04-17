
import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem("saved-clicks"));
    return savedClicks ? savedClicks : { good: 0, neutral: 0, bad: 0 };
  });

  const handleReset = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const totalClicks = clicks.good + clicks.neutral + clicks.bad;

  const positiveFeedback = Math.round(
    ((clicks.good) / clicks.bad) * 100
  );



 const updateClick = (Options) =>{
  if (onClickGood){
    setClicks({ ...clicks, good: clicks.good + 1 });
  }
  else if (onClickNeutral){
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  }
  else {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  }
 }


  return (
    <>
      <Description />
      <Options
        onClickGood={updateClick}
        onClickNeutral={updateClick}
        onClickBad={updateClick}
        onClickReset={handleReset}
        hasFeedback={totalClicks > 0}
      />
      {totalClicks > 0 ? (
        <Feedback
          stateGood={clicks.good}
          stateNeutral={clicks.neutral}
          stateBad={clicks.bad}
          stateTotal={totalClicks}
          statePositive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;