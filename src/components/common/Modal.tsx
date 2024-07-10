import { ChangeEvent, useEffect, useState } from 'react';
import ModalPortal from './ModalPortal';
import { Icon } from './Icon';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import ImageInput from '../modal/ImageInput';
import { useForm } from 'react-hook-form';
import { FormValue } from '@/types/input';
import Input from './Input';

const Modal = ({ onOpenModal, text }: any) => {
  const id = Date.now();
  const storage = getStorage();
  const [imgUpload, setImageUpload] = useState<File | null>(null);
  const [uploadImage, setUploadImage] = useState<FormData>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // getValues,
  } = useForm<FormValue>({ mode: 'onBlur' });

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

          <form className="flex flex-col gap-5">
            <section className="flex flex-col gap-5 mt-5">
              <p className="text-lg">대표 이미지</p>
              <ImageInput
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                setImageUpload={setImageUpload}
              />
              {/* <label htmlFor="profileImg" className="">
                <span className="px-4 py-2 border rounded-md bg-light-blue">
                  이미지 선택
                </span>
              </label> */}
            </section>
            <section className="flex flex-col gap-3">
              <p className="text-lg">제목</p>

              <Input
                name="title"
                inputSize="title"
                registerOptions={register('title', {
                  required: '제목을 입력해주세요',
                  maxLength: {
                    value: 20,
                    message: '제목은 최대 20글자 이하이어야 합니다.',
                  },
                })}
                placeholder="제목"
                errors={errors}
              />
            </section>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
