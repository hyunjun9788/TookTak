import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-32 mx-auto">
        <img className="w-66 h-32" src="/logo.png" alt="logo" />
        <div className="flex justify-center gap-2 mt-5">
          <div>회원이 아니신가요?</div>
          <Link to="/" className="text-main-blue font-bold">
            회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
