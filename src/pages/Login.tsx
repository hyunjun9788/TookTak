import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="mt-32 mx-auto">
        <img className="w-66 h-32" src="/logo.png" alt="logo" />
        <div className="flex justify-center gap-2 mt-5">
          <div>회원이 아니신가요?</div>
          <Link to="/Signup" className="text-main-blue font-bold">
            회원가입 하기
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <LoginForm />
        <div className="flex flex-col gap-3 mt-5">
          <p>SNS 간편 로그인</p>
          <div className="flex justify-center gap-2">
            <a href="/">
              <img src="/kakao.webp" alt="kakaoLogin" width={30} />
            </a>
            <a href="/">
              <img src="/google.png" alt="googleLogin" width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
