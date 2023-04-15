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
          <tr key={todo.id}>
            <td>{todo.id}</td>
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
    // <main>
    // <div className="container">
    //   <ul id="todos-list">
    //     {todos.map(todo => (
    //     <li key={todo.id}>{todo.text}</li>
    //     ))}
    //   </ul>
    // </div>
    // </main>
  )
}

export default Todos;