interface InputProp {
  label?: string;
  inputSize: 'auth' | 'title';
  name: string;
  registerOptions: any;
  placeholder?: string;
  type?: string;
  errors: any;
}

const INPUT_SIZE = {
  auth: 'w-[360px] mobile:w-[295px] h-[55px] md:h-[60px] lg:h-[70px]',
  title: 'w-full h-[55px] md:h-[60px] lg:h-[70px]',
};

const Input = ({
  label,
  inputSize,
  name,
  registerOptions,
  placeholder = '',
  type = 'text',
  errors,
}: InputProp) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        {...registerOptions}
        name={name}
        placeholder={placeholder}
        type={type}
        onBlur={registerOptions.onBlur}
        className={`${INPUT_SIZE[inputSize]} relative px-5 py-[23px] rounded-lg border border-solid bg-black-25 text-sm lg:text-base placeholder-gray-6E focus:outline-none ${
          errors
            ? 'border-red focus:border-red'
            : 'border-gray-35 focus:border-main-blue'
        }`}
      />
      {errors[name] && (
        <small className="text-red-500" role="alert">
          {errors[name].message}
        </small>
      )}
    </div>
  );
};

export default Input;
