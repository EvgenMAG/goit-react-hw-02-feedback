import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <Input label={'Login'} placeholder={'Pupkin'} />
      <Input label={'Password'} placeholder={'*****'} />
      <Button title={'One attempt'} />
    </form>
  );
};

export default Form;
