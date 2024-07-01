import { MockData } from '../types/mockData';

const TodoItem = ({ todo }: { todo: MockData }) => {
  const handleClickDeleteBtn = () => {};

  return (
    <div className="flex gap-4 py-5 border-b-[1px]">
      <input checked={todo.isDone} type="checkbox" />
      <div className="flex-1">{todo.content}</div>
      <div>{new Date(todo.date).toLocaleDateString()}</div>
      <button
        type="button"
        onClick={handleClickDeleteBtn}
        className="bg-light-blue w-9 text-white text-sm"
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
