INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'USER_FETCH_SUCCESS':
        return action.payload;
        case ('SET_IMAGE'):
        return {...state, avatar: action.image}
        default:
        return state;
    }
};