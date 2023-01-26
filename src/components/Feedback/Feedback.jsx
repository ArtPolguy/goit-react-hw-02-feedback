import { Component } from 'react';
import css from './Feedback.module.css';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>
        <input type="button" value="Good" className={css.button} />
        <input type="button" value="Neutral" className={css.button} />
        <input type="button" value="Bad" className={css.button} />
        <h2 className={css.titleStatistic}>Statistics</h2>
        <p className={css.statsValue}>Good:</p>
        <p className={css.statsValue}>Neutral:</p>
        <p className={css.statsValue}>Bad:</p>
      </div>
    );
  }
}

export default Feedback;
