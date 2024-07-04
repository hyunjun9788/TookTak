import { auth } from '@/firebase';
import { logout } from '@/redux/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Dropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logout());

      navigate('/login');
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <ul className="absolute px-1 py-1 top-8 w-24 text-center border-2 rounded-lg bg-white">
      <li
        className="py-2 hover:bg-light-blue rounded-md"
        onClick={handleLogout}
      >
        로그아웃
      </li>
      <li className="py-2 hover:bg-light-blue rounded-md">내 정보</li>
    </ul>
  );
};

export default Dropdown;
