import { combineReducers } from 'redux';
import authReducer from './authReducer';

//wire up the reducers here:
export default combineReducers({
    auth: authReducer
})
//note that the keys passed in the combine reducers(auth, etc) 
// will represent the keys that exists in our state object