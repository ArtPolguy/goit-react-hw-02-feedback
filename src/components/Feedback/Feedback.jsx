import { Component } from 'react';
import css from './Feedback.module.css';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  static propTypes = {};

  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    const nameValue = e.currentTarget.name;
    this.setState(initialState => ({
      [nameValue]: initialState[nameValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeeds = good + neutral + bad;
    return totalFeeds;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const posPercentFeeds = Math.round((good * 100) / total);
    return posPercentFeeds;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <h1 className={css.title}>please leave feedback</h1>
        <input
          type="button"
          value="Good"
          name="good"
          className={css.button}
          onClick={this.handleBtnClick}
        />
        <input
          type="button"
          value="Neutral"
          name="neutral"
          className={css.button}
          onClick={this.handleBtnClick}
        />
        <input
          type="button"
          value="Bad"
          name="bad"
          className={css.button}
          onClick={this.handleBtnClick}
        />
        <h2 className={css.titleStatistic}>Statistics</h2>
        <p className={css.statsValue}>Good: {good}</p>
        <p className={css.statsValue}>Neutral: {neutral}</p>
        <p className={css.statsValue}>Bad: {bad}</p>
        <p className={css.statsValue}>Total: {this.countTotalFeedback()}</p>
        <p className={css.statsValue}>
          Total: {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}

export default Feedback;
