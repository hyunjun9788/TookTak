import { MockData } from '../types/mockData';
import TodoItem from './TodoItem';

const List = ({ todos }: { todos: MockData[] }) => (
  <>
    <div className="flex flex-col gap-4">
      <p className="text-xl mt-6">할 일 리스트</p>
      <input
        className="border-b-2 py-4 focus:outline-none"
        placeholder="검색어를 입력해 주세요"
      />
    </div>
    {todos.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </>
);

export default List;
