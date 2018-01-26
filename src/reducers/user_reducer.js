INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'USER_FETCH_SUCCESS':
        return action.payload;
        case ('SET_IMAGE'):
        return {...state, avatar: action.image};
        case 'SELECTED_DISTANCE':
        return {...state, distanceUnit: action.distance };
        case 'SELECTED_BURN':
        return {...state, burnUnit: action.burn };
        case 'SELECTED_WEIGHT':
        return {...state, weightUnit: action.weightUnit };
        case 'FIRST_CHANGED':
        return {...state, firstName: action.firstName };
        case 'LAST_CHANGED':
        return {...state, lastName: action.lastName };
        case 'WEIGHT_CHANGED':
        return {...state, weight: action.weight };
        case 'LANGUAGE_CHANGED' :
        return {...state, language: action.language };
        case('HORSE_SELECTED_NAME'):
        return {...state,horseSelectedName:action.payload};
        case('BEGIN_LOGOUT'):
        return INITIAL_STATE;
        default:
        return state;
    }
};