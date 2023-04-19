import '../addComment/AddComment.css';

import { useForm } from "../../hooks/useForm"

export const AddComment = ({
  onCommentSubmit
}) => {

  const { values, changeHandler, onSubmit } = useForm({
    comment: '',
  }, onCommentSubmit);

  return (
    <div className="add-comment-section">
        <h2>Add Comment</h2>

        <form method="POST" onSubmit={onSubmit}>

          <textarea 
          id="comment-text" 
          name="comment" 
          rows="4" 
          cols="50" 
          value={values.comment} 
          onChange={changeHandler}>
          </textarea>

          <button type="submit">Submit</button>

        </form>
      </div>
  )
}