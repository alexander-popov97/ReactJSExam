import { Link } from "react-router-dom";

// import { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';

// import { useService } from "../../hooks/useService";

// import { todoServiceFactory } from '../../services/todoService';



const TodoItem = ({
  email,
  _id,
  text,
  Deadline
}) => {
  // const [todos, setTodos] = useState([]);
  // const { userEmail } = useContext(AuthContext);
  // const todoService = useService(todoServiceFactory);

  // useEffect(() => {

  //   todoService.getAll()
  //   .then(tasks => {
  //     setTodos(tasks);
  //   })
  // }, [])

  return (
    <tr>
      <td>{email}</td>
      <td>{text}</td>
      <td>
        <Link to={`/catalog/${_id}`}>Details</Link>
      </td>
    </tr>
  );
}

export default TodoItem;