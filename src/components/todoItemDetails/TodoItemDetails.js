import './TodoItemDetails.css';

import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { todoServiceFactory } from '../../services/todoService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import { AddComment } from '../addComment/AddComment';

const TodoItemDetails = ({
  onDeleteClick,
}) => {
  const { todoId } = useParams();

  const { userId, isAuthenticated, userEmail } = useContext(AuthContext);

  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const {} = useForm();
  const todoService = useService(todoServiceFactory);

  useEffect(() => {

    Promise.all([
      todoService.getOne(todoId),
      todoService.getAllComments(todoId)

    ]).then(([todoData, comments]) => {
      setTodo({
        ...todoData,
        comments,
      });

    })
    }, [todoId]);

    useEffect(() => {

      todoService.getAll()
      .then(tasks => {
        setTodos(tasks);
      })
    }, [])

  const onCommentSubmit = async (values) => {

    const response = await todoService.addComment(todoId, values.comment);
    console.log(response);
    setTodo(state => ({
      ...state,
      comments: [
        ...state.comments, 
        {
          ...response,
          author: {
            email: userEmail,
          }
        }
      ],
    }))
    
  }

  const isOwner = todo._ownerId === userId;

  return (
    <div className="todo-details">
      <h1>Todo Details</h1>
      
                {isOwner && (
                    <div className="details-buttons">
                        <Link to={`/catalog/${todo._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={() => onDeleteClick(todo._id)}>Delete</button>
                    </div>
                )}
           
      <div className="todo-info">
        <label htmlFor="todo-text">Todo:</label>
        <p id="todo-text">{todo.text}</p>
      </div>
      
      <div className="todo-info">
        <label htmlFor="todo-created">Deadline:</label>
        <p id="todo-created">{todo.Deadline}</p>
      </div>
      
        

      <div className="comments-section">
        <h2>Comments</h2>
        <ul id="comments-list">
          {todo.comments && todo.comments.map(x => (
            <li key={x._id} className="comment">
              <p className="comment-list">{x.author.email}: {x.comment}</p>
            </li>
          ))}
            
        </ul>
      </div>
      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </div>

  );
}

export default TodoItemDetails;