import { useEffect, useState } from 'react';
import ModalPortal from './ModalPortal';
import { Icon } from './Icon';

const Modal = ({ onOpenModal, text }: any) => {
  const [attachment, setAttachment] = useState<string | ArrayBuffer | null>(
    null,
  );
  const [uploadImage, setUploadImage] = useState<FormData>();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChangeImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;
    const theFile = files[0];

    // FileReader 생성
    const reader = new FileReader();

    // file 업로드가 완료되면 실행
    reader.onloadend = (finishedEvent) => {
      // 업로드한 이미지 URL 저장
      const result = finishedEvent.target?.result;
      if (result) {
        setAttachment(result);
      }
    };
    // 파일 정보를 읽기
    reader.readAsDataURL(theFile);
  };
  //   const onClearAttachment = () => setAttachment(null);
  console.log(uploadImage);
  return (
    <ModalPortal>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
        <div className="relative container py-6 px-5 w-[700px] h-[800px] bg-white rounded-lg border-2">
          <Icon
            onClick={onOpenModal}
            name="CloseIcon"
            className="absolute right-2 top-2 w-4 h-4 md:w-9 md:h-9 lg:w-10 lg:h-10 text-gray-600"
          />

          <form>
            <input
              className=""
              type="file"
              id="profileImg"
              onChange={handleChangeImageUpload}
            />
            <label htmlFor="profileImg">이미지 선택</label>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
