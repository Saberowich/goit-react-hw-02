
import css from './Options.module.css';


const Options = ({ firstButton, secondButton, thirdButton, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback('good')}>{firstButton}</button>
      <button onClick={() => updateFeedback('neutral')}>{secondButton}</button>
      <button onClick={() => updateFeedback('bad')}>{thirdButton}</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};
export default Options;