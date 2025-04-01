import Axios from 'axios';

export default Axios.create(
  {
    baseURL : 'http://localhost:5001',
    headers: {
      'Content-Type': 'application/json'
    }
  }
);