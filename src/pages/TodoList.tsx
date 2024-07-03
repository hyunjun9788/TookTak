import { useRef, useState } from 'react';
import InputBox from '../components/InputBox';
import Header from '../components/Header';
import List from '../components/List';
import { MockData } from '../types/mockData';
import Floating from '@/components/common/Floating';
import Modal from '@/components/common/Modal';

const mockData: MockData[] = [
  { id: 1, isDone: false, content: '토익', date: new Date().getTime() },
  { id: 2, isDone: false, content: '헬스', date: new Date().getTime() },
  { id: 3, isDone: false, content: '프로젝트', date: new Date().getTime() },
];
function TodoList() {
  const [todos, setTodos] = useState(mockData);
  const [openModal, setOpenModal] = useState(false);
  const onModalAlert = () => {
    setOpenModal(!openModal);
  };

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
      {openModal && (
        <Modal onOpenModal={onModalAlert} text="동아리를 개설하시겠습니까?" />
      )}
      <Header />
      <div className="w-[600px] mt-24 mx-auto">
        <InputBox onCreate={onCreate} />
        <List todos={todos} onDelete={onDelete} onEdit={onEdit} />
      </div>
      <Floating onModalAlert={onModalAlert} />
    </div>
  );
}

export default TodoList;
