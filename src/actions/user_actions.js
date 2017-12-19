import {firebase } from '../firebase/firebase';
export const distanceSelected = (index) => {
    let distance = '';
    if(index === 0) {
         distance = 'MILES';
    }else {
         distance = 'KILOMETRES';
    }
    return {
        type: 'SELECTED_DISTANCE',
        distance
    }
};
export const burnCalSelected = (index) => {
    let burn = '';
    if(index === 0) {
         burn = 'Kcal';
    }else {
         burn = 'Kj';
    }
    return {
        type: 'SELECTED_BURN',
        burn
    }
};
export const weightSelected = (index) => {
    let weightUnit = '';
    if(index === 0) {
         weightUnit = 'Kg';
    }else {
         weightUnit = 'Pounds';
    }
    return {
        type: 'SELECTED_WEIGHT',
        weightUnit
    }
};
export const FirstChanged = (firstName) => {
    return {
        type: 'FIRST_CHANGED',
        firstName
    };
};
export const lastChanged = (lastName) => {
    return {
        type: 'LAST_CHANGED',
        lastName
    };
};
export const weightChanged = (weight) => {
    return {
        type: 'WEIGHT_CHANGED',
        weight
    };
};
export const createProfil = ({ email, firstName, lastName,weight,
    distanceUnit,burnUnit, weightUnit, language }) =>{
    const {currentUser }= firebase.auth();
    return async (dispatch) =>{
        await firebase.database()
        .ref(`/users/${currentUser.uid}/profil`).update({ email, firstName, lastName ,weight,
            distanceUnit,burnUnit, weightUnit, language })
            dispatch({ type: 'PROFIL_CREATED'});
    }
}