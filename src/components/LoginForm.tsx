import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValue } from '../types/input';
import AuthInput from './common/AuthInput';
import Button, { ButtonKind } from './common/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // getValues,
  } = useForm<FormValue>({ mode: 'onBlur' });
  const navigate = useNavigate();

  const email = watch('email');
  const password = watch('password');

  const handleLogin: SubmitHandler<FormValue> = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('로그인에 성공했습니다!');
      navigate('/todolist');
    } catch (error: any) {
      toast.error('로그인에 실패했습니다!');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5">
      <AuthInput
        label="이메일"
        name="email"
        registerOptions={register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
        placeholder="이메일"
        errors={errors}
      />
      <AuthInput
        label="비밀번호"
        name="password"
        registerOptions={register('password', {
          required: '비밀번호를 입력해주세요',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
            message: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요',
          },
        })}
        type="password"
        placeholder="비밀번호"
        errors={errors}
      />
      <Button type="submit" kind={ButtonKind.primary}>
        로그인 하기
      </Button>
    </form>
  );
};

export default LoginForm;
