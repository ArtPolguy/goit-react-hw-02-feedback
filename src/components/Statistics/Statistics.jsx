import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.statsValue}>Good: {good}</p>
      <p className={css.statsValue}>Neutral: {neutral}</p>
      <p className={css.statsValue}>Bad: {bad}</p>
      <p className={css.statsValue}>Total: {total}</p>
      <p className={css.statsValue}>Total: {positivePercentage}%</p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
