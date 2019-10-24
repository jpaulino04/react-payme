import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    const url = '/auth/current_user'
    axios.get(url)
};