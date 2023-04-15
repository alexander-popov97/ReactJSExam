import { useEffect, useState } from 'react';

import './styles.css';

import Nav from './components/Nav';
import Todos from './components/Todos';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//import Register from './components/Register';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
    .then(res => res.json())
    .then(data => {
      const result = Object.keys(data).map(id => ({id, ...data[id]}))
      console.log(result)
      setTodos(Object.values(result))});
    
  }, [])

  return (
    <>
  <Nav />
  <Header />
  <Todos todos={todos} />
  <Footer />
  { /*<Register /> */ }
</>

  );
}

export default App;
