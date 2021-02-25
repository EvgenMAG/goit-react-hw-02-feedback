const Button = ({ title }) => {
  const handleClick = () => alert(`You clicked on ${title}`);

  return <button onClick={handleClick}>{title}</button>;
};

export default Button;
