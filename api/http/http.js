const Axios = require('axios');
require('dotenv').config()

const initiateAxios = () => {
  return Axios.create(
    {
      baseURL : process.env.API_URL,
      headers: {
        'x-api-key': process.env.API_SECRET,
        'Authorization' : '',
        'Content-Type': 'application/json'
      }
    });
}

exports.initiateAxios = initiateAxios;