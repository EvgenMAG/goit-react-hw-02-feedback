import React, { Component } from 'react';

import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtnGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  onClickBtnNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onClickBtnBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = state => {
    const arrayFeedbacks = Object.values(state);
    return arrayFeedbacks.reduce((total, item) => {
      return total + item;
    }, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    console.log(good);
    return Math.trunc((good * 100) / total);
  };

  render() {
    const total = this.countTotalFeedback(this.state);
    return (
      <div className={s.blocks}>
        <h2> Please Leave Feedback</h2>
        <button
          type="button"
          className={s.button}
          onClick={this.onClickBtnGood}
        >
          Good
        </button>
        <button
          type="button"
          className={s.button}
          onClick={this.onClickBtnNeutral}
        >
          Neutral
        </button>
        <button type="button" className={s.button} onClick={this.onClickBtnBad}>
          Bad
        </button>
        <h3>Result</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>
          Positive Feedback:
          {total === 0
            ? 0
            : this.countPositiveFeedbackPercentage(total, this.state.good)}
          %
        </p>
      </div>
    );
  }
}

export default App;
