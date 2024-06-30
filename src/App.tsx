import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<TodoList />} />
    </Routes>
  );
}

export default App;
