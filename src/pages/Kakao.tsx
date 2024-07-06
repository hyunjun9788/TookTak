import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Kakao() {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log('code', code);
  const navigate = useNavigate();
  const [idToken, setIdToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const getKakaoToken = async (code: string) => {
    const KAKAO_REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
    const KAKAO_REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
    const response = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    return response.json();
  };

  useEffect(() => {
    if (code) {
      console.log('46', code);
      console.log('47', getKakaoToken(code));
      getKakaoToken(code).then((res) => {
        console.log(res);
      });
    }
  }, [code]);
  return <div>로딩중</div>;
}

export default Kakao;
