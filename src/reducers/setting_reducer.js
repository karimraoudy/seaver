INITIAL_STATE = {activeGpsBlue:false,showRating:false, showUnitsImage:false}
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
        case('SHOW_UNIT'):
        return {...state,showUnitsImage:true}
        case('HIDE_UNIT'):
        return {...state,showUnitsImage:false}
        default:
        return state;
    }
};