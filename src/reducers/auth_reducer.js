const INITIAL_STATE = {
    email:'',
    password:'',
    confirmPass:'',
    firstName:'',
    lastName:'',
    weight:'',
    distanceUnit:'MILES',
    burnUnit: 'kcal',
    weightUnit: 'Kg',
    language:'fr',
    loading: false,
    error:'',
    showModal:false,
    avatar:'',
    uid: null
}
export default (state =INITIAL_STATE, action)=>{
    switch(action.type){
        case 'EMAIL_CHANGED':
        return {...state, email: action.email};
        case 'PASSWORD_CHANGED':
        return {...state, password: action.password};
        case 'CONFIRM_PASSWORD_CHANGED':
        return {...state, confirmPass: action.password};
        case 'PASSWORD_DONT_MATCH':
        return { ...state , error: 'Mot de passe non identique'};
        case('REGISTER_SUCCESS'):
        return {...state, password:'',confirmPass:'', uid: action.uid, error: '', loading:false };
        case ('REGISTER_FAILED'):
        return {...state, error: action.error
        , password:'',confirmPass:'', loading: false};
        case ('BEGIN_LOGIN'):
        return {...state, loading: true}
        case('LOGIN_SUCCESS'):
        return {...state, password:'', uid: action.uid, error: '', loading:false };
        case ('LOGIN_FAILED'):
        return {...state, error: action.error
        , password:'', loading:false};
        case ('GOOGLE_LOGIN_SUCCESS'):
        return {...state, uid: action.uid, error: '', email: action.email,loading:false};
        case ('GOOGLE_LOGIN_DONT_EXIST'):
        return{ ...state, error: 'Please Register', loading:false};
        case ('FACEBOOK_LOGIN_DONT_EXIST'):
        return{ ...state, error: 'Please Register' , loading:false};
        case ('GOOGLE_LOGIN_FAILED'):
        return{ ...state, error: 'Compte ou  mot de passe  incorrect', loading:false};
        case ('FACEBOOK_LOGIN_SUCCESS'):
        return {...state, uid: action.uid, error: '', email: action.email, loading:false};
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
        case ('PROFIL_CREATED'):
        return INITIAL_STATE;
        case ('RESET_PASSWORD'):
        return {...state, showModal: true, email:''};
        case ('CLOSE_MODAL'):
        return INITIAL_STATE;
        default:
        return state;
    }
}