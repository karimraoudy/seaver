INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case('START_TRAINING'):
        return {...state,trainingName:action.trainingName }
        default:
        return state;
    }
};