import s from './Input.module.css';

const Input = ({ label, placeholder }) => {
  return (
    <div className={s.input}>
      <span>{label}</span> <br />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
