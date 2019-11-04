import {FETCH_USER} from '../actions/types';

export default function(state = null, action) {
    const { type, payload } = action;
    switch (type){
        case FETCH_USER:
            return payload || false; // at this point, your store knows about this state
        default:
            return state;
    }
}

/*  
//You should think of a situation where the response from the server might be null while it completes.
// What should you display while waiting? first, you should return null
// Note that an empty string is interpreted as a falsey value
*/