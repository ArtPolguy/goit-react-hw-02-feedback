import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => (
    <input
      key={option}
      type="button"
      value={option}
      className={css.button}
      onClick={() => onLeaveFeedback(option)}
    />
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
