import { useRef, useState } from 'react';
import InputBox from '../components/InputBox';
import Header from '../components/Header';
import List from '../components/List';
import { MockData } from '../types/mockData';

const mockData: MockData[] = [
  { id: 1, isDone: false, content: '토익', date: new Date().getTime() },
  { id: 2, isDone: false, content: '헬스', date: new Date().getTime() },
  { id: 3, isDone: false, content: '프로젝트', date: new Date().getTime() },
];
function TodoList() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(4);
  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };
  return (
    <div>
      <Header />
      <div className="w-[600px] mt-24 mx-auto">
        <InputBox onCreate={onCreate} />
        <List todos={todos} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default TodoList;
