import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormValue {
  email: string;
  password: string;
}

export interface AuthInputProps {
  register: UseFormRegister<FormValue>;
  errors: FieldErrors<FormValue>;
}
