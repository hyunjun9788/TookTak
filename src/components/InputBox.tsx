import { useRef, useState } from 'react';
import Button, { ButtonKind } from './common/Button';

const InputBox = ({ onCreate }: { onCreate: (content: string) => void }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef<HTMLInputElement>(null);

  const handleClickCreateBtn = () => {
    if (content === '' && contentRef.current !== null) {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (content === '' && contentRef.current !== null) {
        contentRef.current.focus();
        return;
      }
      onCreate(content);
      setContent('');
    }
  };
  return (
    <div className="flex ">
      <input
        ref={contentRef}
        value={content}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 추가해 보세요"
        className="flex-1 border-b-2 p-2 focus:outline-none"
      />
      <Button
        type="button"
        kind={ButtonKind.secondary}
        onClick={handleClickCreateBtn}
        className="w-14 h-10 rounded-md bg-light-blue text-white"
      >
        추가
      </Button>
    </div>
  );
};

export default InputBox;
