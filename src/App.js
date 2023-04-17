import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { todoServiceFactory } from './services/todoService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import Nav from './components/nav/Nav';
import Todos from './components/todos/Todos';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { Logout } from './components/logout/Logout';
import Home from './components/home/Home';
import CreateTodo from './components/createTodo/CreateTodo';
import EditTodo from './components/editTodo/EditTodo';
import TodoItemDetails from './components/todoItemDetails/TodoItemDetails.js';

function App() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const todoService = todoServiceFactory(user.accessToken);
  const authService = authServiceFactory(user.accessToken);

  useEffect(() => {

    todoService.getAll()
    .then(tasks => {
      setTodos(tasks);
    })
  }, [])

  const onCreateTodoSubmit = async (data) => {
    const newTodo = await todoService.create(data);
    setTodos(state => [...state, newTodo])
    navigate('/catalog');
  }

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setUser(result);
      navigate('/');
    } catch(error) {
      console.log("Error: " + error);
    }
  }

  const onRegisterSubmit = async (data) => {

    const { confirmPassword, ...registerData } = data;
    if (confirmPassword !== registerData.password){
      alert("Passwords don't match!")
      return
    }
    try {
      const result = await authService.register(registerData);
      setUser(result);
      navigate('/');
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  const onLogout = async () => {
    setUser({});
    await authService.logout();
  }

  const onTodoEditSubmit = async (values) => {
    const result = await todoService.edit(values._id, values);

    setTodos(state => state.map(x => x._id === values._id ? result : x))

    navigate(`/catalog/${values._id}`);
}

  const context = {
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    userId: user._id,
    token: user.accessToken,
    userEmail: user.email,
    isAuthenticated: !!user.accessToken,
  }

  return (
    <>
    <AuthContext.Provider value={context}>
      <Nav />
      <Header />
      
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/catalog' element={<Todos todos={todos} />} />
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
       <Route path='/create' element={<CreateTodo onCreateTodoSubmit={onCreateTodoSubmit} />} />
       <Route path='/catalog/:todoId' element={<TodoItemDetails />} />
       <Route path='/logout' element={<Logout />} />
       <Route path='/catalog/:todoId/edit' element={<EditTodo onTodoEditSubmit={onTodoEditSubmit} /> } />
      </Routes>

      
      <Footer />
    </AuthContext.Provider>
    </>

  );
}

export default App;
