import '../editTodo/EditTodo.css';

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { todoServiceFactory } from "../../services/todoService";

const EditTodo = ({
  onTodoEditSubmit
}) => {

  const { todoId } = useParams();
  const todoService = useService(todoServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm({
    _id: '',
    text: '',
    Deadline: '',
  }, onTodoEditSubmit);

useEffect(() => {
  todoService.getOne(todoId)
      .then(result => {
          changeValues(result);
      });
}, [todoId]);

  return (

    <form id="edit" method="PUT" onSubmit={onSubmit}>
      <div className="todo-list">
        <h1>Editing...</h1>
        <label htmlFor="edit-todo-text">Todo Text</label>
        <input 
        type="text"
        name="text" 
        id="edit-todo"
        value={values.text}
        onChange={changeHandler}
        />
        <label htmlFor="deadline-input">Deadline</label>
        <input 
        type="text"
        name="Deadline" 
        id="deadline-input"
        value={values.Deadline}
        onChange={changeHandler}
        />
        <button id="edit-button" type="submit">Done</button>
      </div>
    </form>
  );
}

export default EditTodo;