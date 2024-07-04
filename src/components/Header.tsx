import { useEffect, useState } from 'react';
import { Icon } from './common/Icon';
import { auth, db } from '@/firebase';
import { DocumentData, doc, getDoc } from 'firebase/firestore';

function Header() {
  const [userDetails, setUserDetails] = useState<DocumentData>();
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (!user) {
        return null;
      }
      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log('로그인 상태 아님');
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(userDetails);
  return (
    <header className="relative flex justify-center items-center border-b-2 h-24">
      <img src="/logo.png" alt="logo" className="w-34 h-20" />
      <div className="absolute right-8">
        <div className="flex items-center cursor-pointer">
          <p className="text-xl">{userDetails?.nickName}</p>
          <Icon name={'DropDownIcon'} className="w-8" />
        </div>
        <p>{userDetails?.email}</p>
      </div>
    </header>
  );
}

export default Header;
