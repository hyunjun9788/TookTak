import { SubmitHandler, useForm } from 'react-hook-form';
import EmailInput from './EmailInput';
import { FormValue } from '../types/input';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // getValues,
  } = useForm<FormValue>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    // mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
    </form>
  );
};

export default LoginForm;
