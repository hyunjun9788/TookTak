import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <img src="/logo.png" alt="logo" />
      <h2 className="text-3xl">
        <span className="text-main-blue">TookTak</span>으로 할 일들을
        <span className="text-main-blue"> 뚝딱</span> 관리해 보세요
      </h2>
      <Link
        to="/login"
        className="bg-main-blue text-white lg:text-xl py-2 px-3 md:text-xl rounded-md hover:bg-light-blue"
      >
        로그인하기
      </Link>
    </div>
  );
}

export default Home;
