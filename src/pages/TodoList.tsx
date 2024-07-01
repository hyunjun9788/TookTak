import { useState } from 'react';
import InputBox from '../components/InputBox';
import Header from '../components/Header';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

interface MockData {
  id: number;
  isDone: boolean;
  content: string;
  data: number;
}

const mockData: MockData[] = [
  { id: 1, isDone: false, content: '토익', data: new Date().getDate() },
  { id: 2, isDone: false, content: '헬스', data: new Date().getDate() },
  { id: 3, isDone: false, content: '프로젝트', data: new Date().getDate() },
];

function TodoList() {
  const [list, setList] = useState(mockData);

  const onCreate = (content: string) => {
    const newTodo = {
      id: 4,
      isDone: false,
      content,
      data: new Date().getDate(),
    };
    setList([newTodo, ...list]);
  };

  return (
    <div>
      <Header />
      <div className="w-[600px] mt-24 mx-auto">
        <InputBox onCreate={onCreate} />
        <List />
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
