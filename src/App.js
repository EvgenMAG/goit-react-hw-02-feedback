import React, { Component } from 'react';

import s from './App.module.css';
import Section from './components/Section/Section';
import Statistic from './components/Section/Statistic/Statistic';
import FeedbackOptions from './components/Section/FeedbackOptions/FeedbackOptions';
import Notification from './components/Section/Notification/Notification';

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

  countTotalFeedback = () => {
    const arrayFeedbacks = Object.values(this.state);
    const totalFeedback = arrayFeedbacks.reduce((total, item) => {
      return total + item;
    }, 0);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = total => {
    return total === 0 ? 0 : Math.trunc((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);

    return (
      <div className={s.blocks}>
        <Section title={'Please Leave Feedback'}>
          <FeedbackOptions
            good={'good'}
            neutral={'neutral'}
            bad={'bad'}
            btnGood={this.onClickBtnGood}
            btnNeutral={this.onClickBtnNeutral}
            btnBad={this.onClickBtnBad}
          />
        </Section>

        <Section title={'Statistic'}>
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
