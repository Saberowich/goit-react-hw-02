import React from "react";
import css from "./Options.module.css";

const Options = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
  hasFeedback,
  onClickReset,
}) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.btnOption} type="button" onClick={onClickGood}>
        Good
      </button>
      <button className={css.btnOption} type="button" onClick={onClickNeutral}>
        Neutral
      </button>
      <button className={css.btnOption} type="button" onClick={onClickBad}>
        Bad
      </button>
      {hasFeedback && (
        <button className={css.btnOption} type="button" onClick={onClickReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;