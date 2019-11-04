import axios from 'axios';
import { FETCH_USER } from './types';


//Redux thunk inspects the next function'return value
// If finds a function, thunk will call it passing dispatch
export const fetchUser = () => async dispatch => {
    const url = '/auth/current_user'
    const res = await axios.get(url)

    dispatch({
        type: FETCH_USER,
        payload: res.data
    })
}    

//this action will update our backend with the stripe token
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data })
}
