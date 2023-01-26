import { Component } from 'react';
import css from './Feedback.module.css';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = () => {
    this.setState(initialState => ({
      good: initialState.good + 1,
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>
        <input
          type="button"
          value="Good"
          className={css.button}
          onClick={this.handleBtnClick}
        />
        <input type="button" value="Neutral" className={css.button} />
        <input type="button" value="Bad" className={css.button} />
        <h2 className={css.titleStatistic}>Statistics</h2>
        <p className={css.statsValue}>Good: {this.state.good}</p>
        <p className={css.statsValue}>Neutral: {this.state.neutral}</p>
        <p className={css.statsValue}>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default Feedback;
