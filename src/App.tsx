import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const currentUser = false;
  const RequireAuth = ({ children }: any) => {
    return currentUser ? children : <Navigate to="/login" />;
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
