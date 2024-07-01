import { useState } from 'react';

const InputBox = ({ onCreate }: { onCreate: (content: string) => void }) => {
  const [content, setContent] = useState('');

  const handleClickButton = () => {
    onCreate(content);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form className="flex ">
      <input
        value={content}
        onChange={handleChangeInput}
        placeholder="할 일을 추가해 보세요"
        className="flex-1 border-b-2 p-2 focus:outline-none"
      />
      <button
        type="button"
        onClick={handleClickButton}
        className="w-14 h-10 rounded-md bg-light-blue text-white"
      >
        추가
      </button>
    </form>
  );
};

export default InputBox;
