import axios from "axios";

const username = "lukas123";

const API = `https://quark-scandalous-beast.glitch.me/${username}`;

export const getTodos = () => {
  return axios.get(`${API}/todos`);
};

export const createTodo = body => {
  return axios.post(`${API}/todos`, body);
};

export const deleteTodo = id => {
  return axios.delete(`${API}/todos/${id}`);
};

export const updateTodo = async (id, body) => {
  const response = await axios.put(`${API}/todos/${id}`, body);
  return response.data;
};
