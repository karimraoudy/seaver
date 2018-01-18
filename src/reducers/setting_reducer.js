INITIAL_STATE = {activeGpsBlue:false}
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case('SHOW_ACTIVE'):
        return {...state,activeGpsBlue:true}
        case('HIDE_ACTIVE'):
        return {...state,activeGpsBlue:false}
        default:
        return state;
    }
};