import axios from 'axios';

// export new instance of axios
export default axios.create({
  baseURL: 'http://localhost:4000/api/v1/todos',
})

// axios.post(`https://localhost:4000/api/v1/todos`, todo)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })