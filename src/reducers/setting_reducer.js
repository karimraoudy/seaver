INITIAL_STATE = {activeGpsBlue:false,showRating:false}
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case('SHOW_ACTIVE'):
        return {...state,activeGpsBlue:true}
        case('HIDE_ACTIVE'):
        return {...state,activeGpsBlue:false}
        case('SHOW_RATING'):
        return {...state,showRating:true}
        case('HIDE_RATING'):
        return {...state,showRating:false}
        default:
        return state;
    }
};