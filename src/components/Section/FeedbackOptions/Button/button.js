import React from 'react';

import s from './Button.module.css';

const Button = ({ title, action }) => (
  <button type="button" className={s.button} onClick={action}>
    {title}
  </button>
);

export default Button;
