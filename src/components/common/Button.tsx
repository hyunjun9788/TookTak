import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  floating = 'floating',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  onClick?: () => void;
}

const ButtonStyleByKind = {
  [ButtonKind.primary]: {
    button:
      'bg-main-blue disabled:bg-none disabled:bg-gray-35 h-12 mt-4 rounded-lg text-white',
  },
  [ButtonKind.secondary]: {
    button:
      'w-14 h-10 rounded-md bg-light-blue text-white disabled:text-gray-6E',
  },
  [ButtonKind.tertiary]: {
    button:
      'bg-transparent border border-solid border-gray-9F disabled:border-gray-35',
    p: 'text-gray-9F group-disabled:text-gray-6E',
  },
  [ButtonKind.floating]: {
    button:
      'fixed right-[160px] bottom-[50px] flex items-center justify-center rounded-full bg-main-blue w-[60px] h-[60px]',
  },
};

const Button = ({
  type,
  children,
  kind,
  onClick,
  disabled,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      className={`${ButtonStyleByKind[kind].button}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
