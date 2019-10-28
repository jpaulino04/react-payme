import axios from 'axios';
import { FETCH_USER } from './types';


//Redux thunk inspects the next function'return value
// If finds a function, thunk will call it passing dispatch


export const fetchUser = () => {
    return async function(dispatch) {
        const url = '/auth/current_user'
        const res = await axios.get(url)

        dispatch({
            type: FETCH_USER,
            payload: res
        })
    }    
};