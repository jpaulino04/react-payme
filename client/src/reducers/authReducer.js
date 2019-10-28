export default function(state = {}, action) {
    console.log(action);
    const { type } = action;
    switch (type){
        default:
            return state;
    }
}