import { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import { Icon } from './Icon';

const Modal = ({ onOpenModal, text }: any) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalPortal>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
        <div className="relative container py-6 px-5 w-[700px] h-[800px] bg-white rounded-lg border-2">
          <Icon
            onClick={onOpenModal}
            name="CloseIcon"
            className="absolute right-2 top-2 w-4 h-4 md:w-9 md:h-9 lg:w-10 lg:h-10 text-gray-600"
          />

          <div className="items-start">할 일 등록 모달</div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
