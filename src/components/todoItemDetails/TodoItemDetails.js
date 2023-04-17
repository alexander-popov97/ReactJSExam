import './TodoItemDetails.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { todoServiceFactory } from '../../services/todoService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';

const TodoItem = () => {

  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const { todoId } = useParams();

  const [todo, setTodo] = useState({});
  const todoService = useService(todoServiceFactory);

  useEffect(() => {
    todoService.getOne(todoId)
    .then(result => {
      setTodo(result);
      return commentService.getAll(todoId);
    })
    .then(result => {
      setComments(result);
    })
  }, [todoId])

  const onCommentSubmit = async (e) => {
    e.preventDefault();
    await commentService.create({
      todoId,
      username,
      comment
    })
    setUsername('');
    setComment('');
  }

  return (
    <div className="todo-details">
      <h1>Todo Details</h1>
      <div className="todo-info">
        <label htmlFor="todo-text">Todo:</label>
        <p id="todo-text">{todo.text}</p>
      </div>
      <div className="todo-info">
        <label htmlFor="todo-author">Author:</label>
        <p id="todo-author">{todo._id}</p>
      </div>
      <div className="todo-info">
        <label htmlFor="todo-created">Deadline:</label>
        <p id="todo-created">{todo.Deadline}</p>
      </div>
      <div className="add-comment-section">
        <h2>Add Comment</h2>
        <form onSubmit={onCommentSubmit}>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <textarea id="comment-text" rows="4" cols="50" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        <ul id="comments-list">
          {comments.map(x => (
            <li key={x._id}>
              <p>{x.username}: {x.comment}</p>
            </li>
          )
          )}
        </ul>
      </div>
    </div>

  );
}

export default TodoItem;