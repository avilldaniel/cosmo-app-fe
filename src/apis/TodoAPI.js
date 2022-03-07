import axios from 'axios';

// export new instance of axios
export default axios.create({
  baseURL: 'https://cosmo-todo-node-api.herokuapp.com/api/v1/todos',
})