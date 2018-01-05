INITIAL_STATE = {horsename:'',birth:'',breed:'', gender:'',familly:'',withers:'',girthFloor:'',heartGirth:'',
    length:'',shoulderGirth:'',trained:'',isNervous:'',horseid:''}
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){ 
        case('BEGIN_HORSE_CREATION'):
        return INITIAL_STATE;
        case('NAME_CHANGED'):
        return {...state,horsename: action.name};
        case('YEAR_CHANGED'):
        return {...state,birth: action.year};
        case('BREED_CHANGED'):
        return {...state,breed: action.breed};
        case('GENDER_CHANGED'):
        return {...state,gender: action.gender};
        case('FAMILLY_CHANGED'):
        return {...state,familly: action.familly};
        case('WITHERS_CHANGED'):
        return {...state,withers: action.withers};
        case('GIRTH_FLOOR_CHANGED'):
        return {...state,girthFloor: action.girthFloor};
        case('HEART_GIRTH_CHANGED'):
        return {...state,heartGirth: action.heartGirth};
        case('LENGTH_CHANGED'):
        return {...state,length: action.length};
        case('SHOULDER_GIRTH_CHANGED'):
        return {...state,shoulderGirth: action.shoulderGirth};
        case('TRAINED_CHANGED'):
        return {...state,trained: action.trained};
        case('IS_NERVOUS_CHANGED'):
        return {...state,isNervous: action.isNervous};
        case('HORSE_CREATED'):
        return {...INITIAL_STATE, horseid:action.id};
        case('HORSE_TO_SHOW'):
        return {...INITIAL_STATE,horseid:action.id}
        case('HORSE_CREATED_FETCH'):
        return {...state,id: action.id ,horsename:action.payload.horsename,birth:action.payload.birth,
            breed:action.payload.breed, gender:action.payload.gender,familly:action.payload.familly,
            withers:action.payload.withers,girthFloor:action.payload.girthFloor,heartGirth:action.payload.heartGirth,
        length:action.payload.length,shoulderGirth:action.payload.shoulderGirth,trained:action.payload.trained,
        isNervous:action.payload.isNervous ,horseid:''};
        default:
        return state;
    }
};