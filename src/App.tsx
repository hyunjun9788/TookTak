import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/types';
import Kakao from './pages/Kakao';
function App() {
  const user = useSelector((state: RootState) => state.user);

  console.log('@', user);
  const RequireAuth = ({ children }: any) => {
    return user ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todolist"
          element={
            <RequireAuth>
              <TodoList />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/callback/kakaotalk" element={<Kakao />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        limit={1}
        closeButton={false}
        autoClose={4000}
        hideProgressBar
      />
    </>
  );
}

export default App;
