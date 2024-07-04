import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
