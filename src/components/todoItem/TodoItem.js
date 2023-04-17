import { Link } from "react-router-dom";

const TodoItem = ({
  _id,
  text,
  Deadline
}) => {
  return (
    <tr>
      <td>{_id}</td>
      <td>{text}</td>
      <td>
        <Link to={`/catalog/${_id}`}>Details</Link>
      </td>
    </tr>
  );
}

export default TodoItem;