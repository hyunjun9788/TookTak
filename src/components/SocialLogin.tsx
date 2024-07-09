import app, { auth, db } from '@/firebase';
import { login } from '@/redux/user';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

declare global {
  interface Window {
    Kakao: any;
  }
}

// const auth = getAuth(app)

export interface UserAccount {
  email: string;
  id: string;
  id_token: string;
}

// export async function kakaoSignUp({ email, id, id_token }: UserAccount) {
//   let result = null;
//   let error = null;

//   try {
//     result = await createUserWithEmailAndPassword(auth, email, id.toString());
//     console.log('result1', result);
//     alert('회원가입 완료');
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//       if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
//         console.log('true');
//         await kakaoLogin({ email, id, id_token });
//       } else {
//         alert(error);
//       }
//     }
//   }

//   return { result, error };
// }

// export const kakaoLogin = ({ email, id, id_token }: UserAccount) => {
//   // const navigate = useNavigate();
//   const provider = new OAuthProvider('oidc.kakao');
//   const credential = provider.credential({
//     idToken: id_token,
//   });

//   signInWithCredential(auth, credential)
//     .then((result) => {
//       const credential = OAuthProvider.credentialFromResult(result);
//       console.log(credential);
//       const acToken = credential?.accessToken;
//       const idToken = credential?.idToken;
//       toast.success('로그인에 성공했습니다!');
//       // navigate('/todolist');
//     })
//     .catch((error) => {
//       // Handle error.
//       console.log(error);
//     });
// };

const SocialLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    console.log(provider);
    const result = await signInWithPopup(auth, provider);
    console.log('result', result);
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
