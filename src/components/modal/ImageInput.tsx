import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Icon } from '../common/Icon';

interface ImageInputProp {
  imageUrl: string | null;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
  setImageUpload: Dispatch<SetStateAction<File | null>>;
}
const ImageInput = ({
  imageUrl,
  setImageUrl,
  setImageUpload,
}: ImageInputProp) => {
  return imageUrl ? (
    <div
      className="relative w-[140px] md:w-[135px] lg:w-[160px] h-[140px] md:h-[135px] lg:h-[160px] rounded-lg"
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
          onClick={() => setImageUrl(null)}
        />
      </div>
    </div>
  ) : (
    <div className="relative flex justify-center items-center w-[140px] md:w-[135px] lg:w-[160px] h-[140px] md:h-[135px] lg:h-[160px] rounded-lg p-[58px] md:p-[55px] lg:p-[63px] border border-solid">
      <input
        className="absolute inset-0 w-full h-full opacity-0"
        type="file"
        id="profileImg"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (event.target.files !== null) {
            setImageUpload(event.target.files[0]);
          }
        }}
      />
      <Icon
        name={'UploadIcon'}
        className="w-[50px] h-[50px] text-gray-6E cursor-pointer"
      />
    </div>
  );
};

export default ImageInput;
