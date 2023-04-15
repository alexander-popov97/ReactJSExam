// import todo

const Todos = ({
  todos,
}) => {
  return (
    <main>
    <section id="todos">
      <h2>Todos</h2>
      <ul id="todos-list">
        {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
    </main>
  )
}

export default Todos;