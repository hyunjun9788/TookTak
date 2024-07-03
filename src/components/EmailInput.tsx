import { AuthInputProps } from '../types/input';
import Input from './Input';

const EmailInput = ({ register, errors }: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email">이메일</label>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      {errors.email && (
        <small className="text-red-500" role="alert">
          {errors.email.message}
        </small>
      )}
    </div>
  );
};
export default EmailInput;
