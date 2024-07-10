import { ChangeEvent, useEffect, useState } from 'react';
import ModalPortal from './ModalPortal';
import { Icon } from './Icon';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import ImageInput from '../modal/ImageInput';
import { useForm } from 'react-hook-form';
import { FormValue } from '@/types/input';
import Input from './Input';
import Button, { ButtonKind } from './Button';

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
            className="absolute right-2 top-2 w-3 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600"
          />

          <form className="flex flex-col gap-5">
            <section className="flex flex-col gap-5 mt-5">
              <p className="text-lg">대표 이미지</p>
              <ImageInput
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                setImageUpload={setImageUpload}
              />
            </section>

            <section className="flex flex-col gap-3">
              <p className="text-lg">할 일</p>

              <textarea
                className="scrollbar-hide w-full h-40 p-3 text-sm lg:text-base font-normal placeholder-gray-6E resize-none focus:outline-none leading-5 lg:leading-[22px] border border-solid rounded-lg"
                {...register('textarea', {
                  required: '할 일을 입력해 주세요',
                  maxLength: {
                    value: 300,
                    message: '300자 이하로 입력해 주세요',
                  },
                })}
                // maxLength={300}
                placeholder="할 일을 입력해 주세요"
              />
            </section>

            <Button kind={ButtonKind.modal} type="submit">
              할 일 추가
            </Button>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
