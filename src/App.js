import React from 'react';
import HomePage from './components/HomePage';

import s from './App.module.css';

const App = () => {
  return (
    <>
      <div className={s.blocks}>
        <HomePage title={'Learn React'} great={'Hello World!'} />
      </div>
    </>
  );
};

export default App;
