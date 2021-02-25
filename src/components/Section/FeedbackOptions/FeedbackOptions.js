import React from 'react';
import Button from '../FeedbackOptions/Button/button';

const FeedbackOptions = ({
  good,
  neutral,
  bad,
  btnGood,
  btnNeutral,
  btnBad,
}) => {
  return (
    <div>
      <Button title={good} action={btnGood} />
      <Button title={neutral} action={btnNeutral} />
      <Button title={bad} action={btnBad} />
    </div>
  );
};

export default FeedbackOptions;
