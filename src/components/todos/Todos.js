import '../todos/Todos.css';
import '../todos/NoTodos.css';

import TodoItem from '../todoItem/TodoItem';

const Todos = ({
  todos,
}) => {
  console.log(todos)
  
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
              <TodoItem key={todo._id} {...todo} />
            ))}
          </tbody>
        </table>)}
      
        
      </>
    )
  
  }
  

export default Todos;