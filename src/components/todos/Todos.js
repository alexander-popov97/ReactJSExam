import '../todos/Todos.css';

// import todo

const Todos = ({
  todos,
}) => {
  return (

    <table>
      <tbody>
        <tr>
          <th>Person</th>
          <th>Task</th>
          <th>Action</th>
        </tr>
        {todos.map(todo => (
          <tr key={todo._id}>
            <td>{todo._id}</td>
            <td>{todo.text}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
              <button>Comments</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Todos;