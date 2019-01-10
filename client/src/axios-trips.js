import axios from 'axios';

const instance = axios.create({
  baseURL:'https://vacation-planner-d91ad.firebaseio.com/'
});

export default instance;
