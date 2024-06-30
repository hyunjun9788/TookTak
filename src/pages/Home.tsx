function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <img src="/logo.png" alt="logo" />
      <h2 className="text-3xl">
        <span className="text-main-blue">TookTak</span>으로 할 일들을
        <span className="text-main-blue"> 뚝딱</span> 관리해 보세요
      </h2>
    </div>
  );
}

export default Home;
