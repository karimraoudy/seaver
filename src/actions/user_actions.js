import { firebase } from '../firebase/firebase';
export const distanceSelected = (index) => {
    let distance = '';
    if (index === 0) {
        distance = 'Miles';
    } else {
        distance = 'Km';
    }
    return {
        type: 'SELECTED_DISTANCE',
        distance
    }
};
export const burnCalSelected = (index) => {
    let burn = '';
    if (index === 0) {
        burn = 'Kcal';
    } else {
        burn = 'Kj';
    }
    return {
        type: 'SELECTED_BURN',
        burn
    }
};
export const weightSelected = (index) => {
    let weightUnit = '';
    if (index === 0) {
        weightUnit = 'Kg';
    } else {
        weightUnit = 'Lbs';
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
export const setImage = (image) => {
    return {
        type: 'SET_IMAGE',
        image
    };
};
export const languageChanged = (index) => {

    if (index === '1') {
        return {
            type: 'LANGUAGE_CHANGED',
            language: 'ang'
        }
    } else {
        return {
            type: 'LANGUAGE_CHANGED',
            language: 'fr'
        }
    }

};
export const beginHorseCreation = () => {
    return {
        type: 'BEGIN_HORSE_CREATION'
    }
};
export const createProfil = ({ email, firstName, lastName, weight,
    distanceUnit, burnUnit, weightUnit, language }) => {
    const { currentUser } = firebase.auth();
    return async (dispatch) => {
        await firebase.database()
            .ref(`/users/${currentUser.uid}/profil`).update({
                email, firstName, lastName, weight,
                distanceUnit, burnUnit, weightUnit, language
            })
        dispatch({ type: 'PROFIL_CREATED' });
    }
}
export const userFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/profil`)
            .on('value', snapshot => {
                dispatch({
                    type: 'USER_FETCH_SUCCESS',
                    payload: snapshot.val()
                });
            });

    };
};
export const updateProfile = ({ firstName, lastName, weight,
    distanceUnit, burnUnit, weightUnit, language }) => {
    const { currentUser } = firebase.auth();
    return async (dispatch) => {
        await firebase.database()
            .ref(`/users/${currentUser.uid}/profil`).update({
                firstName, lastName, weight,
                distanceUnit, burnUnit, weightUnit, language
            })
        dispatch({ type: 'PROFIL_UPDATED' });
    }
}
export const showSelectHorse = () => {
    return {
        type: 'SHOW_SELECT_HORSE'
    }
};
export const hideSelectHorse = () => {
    return {
        type: 'HIDE_SELECT_HORSE'
    }
};