import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="mt-32 mx-auto">
        <img className="w-66 h-32" src="/logo.png" alt="logo" />
        <div className="flex justify-center gap-2 mt-5">
          <div>이미 회원이신가요?</div>
          <Link to="/login" className="text-main-blue font-bold">
            로그인 하기
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
