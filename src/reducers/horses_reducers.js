INITIAL= {}
export default (state = INITIAL, action) =>{
    switch(action.type){ 
        case('HORSES_FETCH_SUCCESS'):
        return action.payload;
        default:
        return state;
    }
};