import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValue } from '../types/input';
import Button, { ButtonKind } from './common/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Input from './common/Input';
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValue>({ mode: 'onChange' });
  const navigate = useNavigate();
  const email = watch('email');
  const password = watch('password');
  const nickName = watch('nickName');

  //   const { mutate, isPending } = useRegisterMutation(setError);

  // const onSubmit: SubmitHandler<FormValue> = (data) => {
  //   // mutate(data);
  // };

  const handleRegister = async (e: any) => {
    // e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          nickName: nickName,
        });
      }
      toast.success('회원가입에 성공했습니다!');
      navigate('/todolist');
    } catch (error: any) {
      toast.error('회원가입에 실패했습니다!');
    }
  };
  const isButtonDisabled = !isValid || isSubmitting;
  return (
    <form
      autoComplete="off"
      className="flex flex-col gap-6 mobile:gap-[30px]"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Input
        label="이메일"
        name="email"
        inputSize="auth"
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
      <Input
        label="닉네임"
        name="nickName"
        inputSize="auth"
        registerOptions={register('nickName', {
          required: '닉네임을 입력해주세요',
          pattern: {
            value: /^[가-힣a-zA-Z0-9]{2,16}$/,
            message: '공백을 제외한 영어, 숫자, 한글 2자 ~ 12자',
          },
          //   validate: async (value) => await checkNickNameExists(value),
        })}
        placeholder="닉네임"
        errors={errors}
      />
      <Input
        label="비밀번호"
        name="password"
        inputSize="auth"
        registerOptions={register('password', {
          required: '비밀번호를 입력해주세요',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
            message: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요',
          },
        })}
        type="password"
        placeholder="숫자 + 영문자 + 특수문자 조합, 8자리 이상"
        errors={errors}
      />
      <Input
        label="비밀번호 확인"
        name="passwordConfirm"
        inputSize="auth"
        registerOptions={register('passwordConfirm', {
          required: '비밀번호 확인을 입력해주세요',
          validate: (value) =>
            watch().password !== value ? '비밀번호가 일치하지 않습니다' : true,
        })}
        type="password"
        placeholder="숫자 + 영문자 + 특수문자 조합, 8자리 이상"
        errors={errors}
      />
      <Button
        type="submit"
        kind={ButtonKind.primary}
        disabled={isButtonDisabled}
      >
        회원가입하기
      </Button>
    </form>
  );
};

export default RegisterForm;
