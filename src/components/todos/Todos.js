import '../todos/Todos.css';
import '../todos/NoTodos.css';
import { useEffect, useState, } from 'react';

import { Link } from 'react-router-dom';

import { useService } from "../../hooks/useService";

import { todoServiceFactory } from '../../services/todoService';

const Todos = ({
  todos,
}) => {
  const [tasks, setTodos] = useState([]);
  const todoService = useService(todoServiceFactory);

  useEffect(() => {

    todoService.getAll()
    .then(tasks => {
      setTodos(tasks);
    })
  }, [])
  
    return (
      <>
      {todos.length === 0 && 
      (<h1 id="no-todos">No tasks currently</h1>)}
      {todos.length > 0 && (
      <table>
          <tbody>
            <tr>
              <th>Person</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
            {todos.map(todo => (
              <tr key={todo._id}>
              <td>{todo.email}</td>
              <td>{todo.text}</td>
              <td>
                <Link to={`/catalog/${todo._id}`}>Details</Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>)}
      
        
      </>
    )
  
  }
  

export default Todos;