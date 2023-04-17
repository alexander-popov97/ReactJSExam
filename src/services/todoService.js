import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/todos';

export const todoServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    
    const result = await request.get(baseUrl);
    const tasks = Object.values(result);

    return tasks;
  }
  
  const getOne = async (todoId) => {
    const result = await request.get(`${baseUrl}/${todoId}`);
  
  
    return result
  }
  
  const create = async (todoData) => {
    
    const result = await request.post(baseUrl, todoData)
  
    return result
  }

  const addComment = async (todoId, data) => {
    const result = await request.post(`${baseUrl}/${todoId}/comments`, data);

    return result;
  }

  const edit = (todoId, data) => request.put(`${baseUrl}/${todoId}`, data);

  const deleteTodo = (todoId) => request.delete(`${baseUrl}/${todoId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    addComment,
    delete: deleteTodo,
  }
}