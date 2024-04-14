
import css from "./Feedback.module.css";

const Feedback = ({
  stateGood,
  stateNeutral,
  stateBad,
  stateTotal,
  statePositive,
}) => {
  return (
    <div className={css.containerFeedback}>
      <p className={css.textFeedback}>Good:{stateGood}</p>
      <p className={css.textFeedback}>Neutral:{stateNeutral}</p>
      <p className={css.textFeedback}>Bad:{stateBad}</p>
      <p className={css.textFeedback}>Total:{stateTotal}</p>
      <p className={css.textFeedback}>Positive:{statePositive} %</p>
    </div>
  );
};

export default Feedback;