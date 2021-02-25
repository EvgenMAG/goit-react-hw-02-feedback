import Form from './Form';

const HomePage = ({ title, great }) => (
  <div>
    <h1>{title}</h1>
    <h2>{great}</h2>
    <Form />
  </div>
);

export default HomePage;
