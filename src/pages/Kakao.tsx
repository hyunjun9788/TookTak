import { UserAccount } from '@/components/SocialLogin';
import { auth, db } from '@/firebase';
import { login } from '@/redux/user';
import { OAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Kakao() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getResponse = async (code: string) => {
    try {
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
      const { access_token, id_token } = await response.json();

      const kapiParams = {
        secure_resource: 'true',
        property_key: '["kakao_account.email"]',
      };
      const kapiQueryString = new URLSearchParams(kapiParams).toString();
      console.log(kapiQueryString);
      const kapiData = await fetch(
        `https://kapi.kakao.com/v2/user/me?${kapiQueryString}`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );

      const { id, kakao_account } = await kapiData.json();
      console.log(kakao_account);
      const { email } = kakao_account;

      if (!email) {
        throw new Error('Invalid user');
      }

      return { email, id, id_token };
    } catch (error) {
      throw error;
    }
  };

  const kakaoLogin = async ({ email, id, id_token }: UserAccount) => {
    const provider = new OAuthProvider('oidc.kakao');
    const credential = provider.credential({
      idToken: id_token,
    });

    try {
      const result = await signInWithCredential(auth, credential);
      const user = result.user;
      const uid = user.uid;
      console.log('user', user);
      dispatch(
        login({ uid: uid, email: email, displayName: user.displayName }),
      );
      if (user) {
        await setDoc(doc(db, 'Users', uid), {
          email: email,
          nickName: user.displayName,
        });
      }
      navigate('/todolist');
      toast.success('로그인에 성공했습니다!');

      return { result, error: null };
    } catch (error) {
      return { result: null, error };
    }
  };
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (!code) return;
    const login = async (code: string) => {
      const { email, id, id_token } = await getResponse(code);
      await kakaoLogin({ email, id, id_token });
    };
    login(code);
  }, []);
  return <div>로딩중</div>;
}

export default Kakao;
