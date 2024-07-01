import { useState } from 'react';
import { MockData } from '../types/mockData';
import TodoItem from './TodoItem';

const List = ({ todos }: { todos: MockData[] }) => {
  const [search, setSearch] = useState('');
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => todo.content.includes(search));
  };
  const filteredTodos = getFilteredTodos();
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-xl mt-6">할 일 리스트</p>
        <input
          className="border-b-2 py-4 focus:outline-none"
          placeholder="검색어를 입력해 주세요"
          onChange={handleChangeInput}
        />
      </div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default List;
