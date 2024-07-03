interface AuthInputProp {
  label: string;
  name: string;
  registerOptions: any;
  placeholder?: string;
  type?: string;
  errors: any;
}

const AuthInput = ({
  label,
  name,
  registerOptions,
  placeholder = '',
  type = 'text',
  errors,
}: AuthInputProp) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        {...registerOptions}
        name={name}
        placeholder={placeholder}
        type={type}
        onBlur={registerOptions.onBlur}
        className={`w-[360px] mobile:w-[295px] h-[55px] md:h-[60px] lg:h-[70px] relative px-5 py-[23px] rounded-lg border border-solid bg-black-25 text-sm lg:text-base placeholder-gray-6E focus:outline-none ${
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

export default AuthInput;
