import { FETCH_USER } from './types';
import axios from 'axios';


async const fetchUser = () => {
  await axios.get('/api/current_user');

};
