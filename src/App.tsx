import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
