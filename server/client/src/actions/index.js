import { FETCH_USER } from './types';
import axios from 'axios';

//Fetches the user for the Header toolbar
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch ({ type: FETCH_USER, payload: res.data});
}

//Handles the token returned by Stripe to update the user model
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
}
