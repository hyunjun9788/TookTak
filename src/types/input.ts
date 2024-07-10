import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormValue {
  email: string;
  password: string;
  nickName: string;
  passwordConfirm: string;
  title: string;
  textarea: string;
}

export interface InputProps {
  register: UseFormRegister<FormValue>;
  errors: FieldErrors<FormValue>;
}
