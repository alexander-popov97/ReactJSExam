import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Todos from './components/todos/Todos';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
    .then(res => res.json())
    .then(data => {
      const result = Object.keys(data).map(id => ({id, ...data[id]}))
      setTodos(Object.values(result))})
    .catch(e => {
      console.log("Error: " + e);
    })
  }, [])

  return (
    <>
      <Nav />
      <Header />
      
      <Routes>
       <Route path='/' element={<Todos todos={todos} />} />
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </>

  );
}

export default App;
