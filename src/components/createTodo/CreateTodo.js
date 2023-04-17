import '../createTodo/CreateTodo.css';

import { useForm } from '../../hooks/useForm';

const CreateTodo = ({
  onCreateTodoSubmit
}) => {

  const { values, changeHandler, onSubmit } = useForm({
    text: '',
    Deadline: '',
  }, onCreateTodoSubmit);

  return (
    <section>
    <form id="create" method="POST" onSubmit={onSubmit}>
      <div className="todo-list">
        <h1>New Task</h1>
        <label htmlFor="todo-input">New Todo</label>

        <input 
        value={values.text} 
        onChange={changeHandler} 
        type="text" 
        id="text"
        name="text" 
        />

        <label htmlFor="deadline-input">Deadline</label>

        <input 
        value={values.Deadline} 
        onChange={changeHandler} 
        type="text" 
        id="Deadline"
        name="Deadline"
        />

        <button id="todo-button" type="submit">Add</button>
        <div id="todo-list-items"></div>
      </div>
    </form>
    </section>

  );
}

export default CreateTodo;