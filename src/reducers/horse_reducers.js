import moment from 'moment'
const yearNow = moment().format('YYYY');
INITIAL_STATE = {horsename:'',birth:'',breed:'', gender:'',familly:'',withers:0,girthFloor:0,heartGirth:0,
    length:0,shoulderGirth:0,trained:'',isNervous:'',horseid:'',isPregnant:'',
    showConfirm:false,idTodelete:'',showSelectHorse:false, horseSelectedName:''}
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
        case('IS_PREGNANT'):
        return {...state,isPregnant: action.isPregnant};
        case('HORSE_CREATED'):
        return {...INITIAL_STATE, horseid:action.id};
        case('HORSE_TO_SHOW'):
        return {...INITIAL_STATE,horseid:action.id};
        case('HORSE_SELECTED_NAME'):
        return {...state,horseSelectedName:action.payload};
        case('SHOW_CONFIRM'):
        return{...state,showConfirm:true, idTodelete:action.idTodelete};
        case('HIDE_CONFIRM'):
        return{...state,showConfirm:false, idTodelete:''};
        case('HORSE_SELECTED'):
        return {...state,showSelectHorse:false}
        case ('SHOW_SELECT_HORSE'):
        if(state.showSelectHorse){
            return {...state,showSelectHorse:false};
        }
        return {...state,showSelectHorse:true};
        case ('HIDE_SELECT_HORSE'):
        return {...state,showSelectHorse:false};
        case('HORSE_CREATED_FETCH'):
        return {...state,id: action.id ,horsename:action.payload.horsename,birth:action.payload.birth,
            breed:action.payload.breed, gender:action.payload.gender,familly:action.payload.familly,
            withers:action.payload.withers,girthFloor:action.payload.girthFloor,heartGirth:action.payload.heartGirth,
        length:action.payload.length,shoulderGirth:action.payload.shoulderGirth,trained:action.payload.trained,
        isNervous:action.payload.isNervous ,horseid:'', isPregnant:action.payload.isPregnant};
        default:
        return state;
    }
};