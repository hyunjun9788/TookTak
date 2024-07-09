import { auth, db } from '@/firebase';
import { login } from '@/redux/user';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

declare global {
  interface Window {
    Kakao: any;
  }
}

export interface UserAccount {
  email: string;
  id: string;
  id_token: string;
}

const SocialLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const { uid, email, displayName } = result.user;
    if (result.user) {
      await setDoc(doc(db, 'Users', uid), {
        email: email,
        nickName: displayName,
      });
      toast.success('로그인에 성공했습니다!');
      dispatch(login({ uid: uid, email: email, displayName: displayName }));
      navigate('/todolist');
    }
  };

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_APP_REST_API_KEY);
  }

  const onLoginWithKakao = () => {
    const redirectUri = import.meta.env.VITE_APP_REDIRECT_URI;
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-5">
      <p>SNS 간편 로그인</p>
      <div className="flex justify-center gap-2">
        <img
          src="/kakao.webp"
          alt="kakaoLogin"
          width={30}
          onClick={onLoginWithKakao}
        />
        <img
          src="/google.png"
          alt="googleLogin"
          width={30}
          onClick={handleClickGoogleLogin}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
