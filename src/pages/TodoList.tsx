import { useState } from 'react';
import InputBox from '../components/InputBox';
import Header from '../components/Header';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const [list, setList] = useState([]);
  return (
    <div>
      <Header />
      <div className="w-[600px] mt-24 mx-auto">
        <InputBox setList={setList} />
        <List />
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
