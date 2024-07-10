import { ChangeEvent, useEffect, useState } from 'react';
import ModalPortal from './ModalPortal';
import { Icon } from './Icon';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const Modal = ({ onOpenModal, text }: any) => {
  const id = Date.now();
  const storage = getStorage();
  const [imgUpload, setImgUpload] = useState<File | null>(null);
  const [uploadImage, setUploadImage] = useState<FormData>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const upload = () => {
    if (imgUpload === null) return;

    const imageRef = ref(storage, `images/${imgUpload.name}_${id}`);

    uploadBytes(imageRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImageUrl(url);
        // setImgUrl((prev) => [
        //   ...prev,
        //   { url: url, id: `images/${imgUpload.name}_${id}` },
        // ]);
      });
    });
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(upload, [imgUpload]);
  //   const onClearAttachment = () => setAttachment(null);
  return (
    <ModalPortal>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
        <div className="relative container py-6 px-5 w-[500px] h-[600px] bg-white rounded-lg border-2">
          <Icon
            onClick={onOpenModal}
            name="CloseIcon"
            className="absolute right-2 top-2 w-4 h-4 md:w-9 md:h-9 lg:w-10 lg:h-10 text-gray-600"
          />

          <form>
            <section className="flex flex-col gap-5 mt-5">
              <p className="text-xl">대표 이미지</p>
              {imageUrl ? (
                <div
                  className="relative w-[140px] md:w-[135px] lg:w-[180px] h-[140px] md:h-[135px] lg:h-[180px] rounded-lg"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute top-[5px] right-[5px] w-[26px] lg:w-7 h-[26px] lg:h-7 p-1 bg-black bg-opacity-50 rounded-lg">
                    <Icon
                      name="CloseIcon"
                      className="w-full h-full text-gray-F1 cursor-pointer"
                      onClick={() => setImageUrl('')}
                    />
                  </div>
                </div>
              ) : (
                <div className="relative flex justify-center items-center w-[140px] md:w-[135px] lg:w-[180px] h-[140px] md:h-[135px] lg:h-[180px] rounded-lg p-[58px] md:p-[55px] lg:p-[63px] border border-solid border-gray-35 bg-black-25">
                  <input
                    className="absolute inset-0 w-full h-full opacity-0"
                    type="file"
                    id="profileImg"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      if (event.target.files !== null) {
                        setImgUpload(event.target.files[0]);
                      }
                    }}
                  />
                  <Icon
                    name={'UploadIcon'}
                    className="w-[50px] h-[50px] text-gray-6E cursor-pointer"
                  />
                </div>
              )}
              {/* <label htmlFor="profileImg" className="">
                <span className="px-4 py-2 border rounded-md bg-light-blue">
                  이미지 선택
                </span>
              </label> */}
            </section>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
