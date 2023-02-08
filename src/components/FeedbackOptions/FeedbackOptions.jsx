import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
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
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
