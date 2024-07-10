import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
  modal = 'modal',
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
  [ButtonKind.modal]: {
    button:
      'h-12 mt-8 bg-main-blue border border-solid border-gray-9F disabled:border-gray-35 rounded-lg text-white hover:bg-light-blue',
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
