import { requestFactory } from './requester';

const catalogUrl = 'http://localhost:3030/data/catalog';
const commentsUrl = 'http://localhost:3030/data/comments';


export const todoServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    
    const result = await request.get(catalogUrl);
    const tasks = Object.values(result);

    return tasks;
  }
  
  const getOne = async (todoId) => {
    const result = await request.get(`${catalogUrl}/${todoId}`);
  
  
    return result
  }
  
  const create = async (todoData) => {
    
    const result = await request.post(catalogUrl, todoData)
  
    return result
  }

  const edit = (todoId, data) => request.put(`${catalogUrl}/${todoId}`, data);

  const deleteTodo = (todoId) => request.delete(`${catalogUrl}/${todoId}`);

  const addComment = async (todoId, comment) => {
    const result = await request.post(commentsUrl, {todoId, comment});

    return result;
  }

  const deleteComment = (commentId) =>  request.delete(`${commentsUrl}/${commentId}`);

  const getAllComments = async (todoId) => {
    
    const query = encodeURIComponent(`todoId="${todoId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users')

    const result = await request.get(`${commentsUrl}?where=${query}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
  }



  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteTodo,
    addComment,
    deleteComment,
    getAllComments,
  }
}