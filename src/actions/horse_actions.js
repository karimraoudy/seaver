import { firebase } from '../firebase/firebase';
export const nameChanged = (name) => {
    return {
        type: 'NAME_CHANGED',
        name
    };
};
export const yearChanged = (year) => {
    return {
        type: 'YEAR_CHANGED',
        year
    };
};
export const breedChanged = (breed) => {
    return {
        type: 'BREED_CHANGED',
        breed
    }
};
export const genderChanged = (gender) => {
    return {
        type: 'GENDER_CHANGED',
        gender
    }
};
export const famillyChanged = (familly) => {
    return {
        type: 'FAMILLY_CHANGED',
        familly
    }
};
export const withersChanged = (withers) => {
    return {
        type: 'WITHERS_CHANGED',
        withers
    }
};
export const girthFloorChanged = (girthFloor) => {
    return {
        type: 'GIRTH_FLOOR_CHANGED',
        girthFloor
    }
};
export const heartGirthChanged = (heartGirth) => {
    return {
        type: 'HEART_GIRTH_CHANGED',
        heartGirth
    }
};
export const lengthChanged = (length) => {
    return {
        type: 'LENGTH_CHANGED',
        length
    }
};
export const shoulderGirthChanged = (shoulderGirth) => {
    return {
        type: 'SHOULDER_GIRTH_CHANGED',
        shoulderGirth
    }
};
export const trainedChanged = (trained) => {
    return {
        type: 'TRAINED_CHANGED',
        trained
    }
};
export const isNervousChanged = (isNervous) => {
    return {
        type: 'IS_NERVOUS_CHANGED',
        isNervous
    }
};
export const showHorse = (id) => {
    return {
        type: 'HORSE_TO_SHOW',
        id
    }
};
export const horseCreate = ({ horsename, birth, breed, gender, familly, withers, girthFloor, heartGirth,
    length, shoulderGirth, trained, isNervous }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/horses`)
            .push({
                horsename, birth, breed, gender, familly, withers, girthFloor, heartGirth,
                length, shoulderGirth, trained, isNervous
            }).then((e) => {

                dispatch({
                    type: 'HORSE_CREATED',
                    id: e.key
                });
            });
    };
};
export const horseCreatedFetch = ({ id }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/horses/${id}`)
            .on('value', snapshot => {
                dispatch({
                    type: 'HORSE_CREATED_FETCH',
                    payload: snapshot.val(),
                    id: snapshot.key
                });
            }

            );

    };
};
export const updateHorse = ({ horsename, birth, breed, gender, familly, withers, girthFloor, heartGirth,
    length, shoulderGirth, trained, isNervous, id }) => {
    const { currentUser } = firebase.auth();
    return async (dispatch) => {
        await firebase.database()
            .ref(`/users/${currentUser.uid}/horses/${id}`).update({
                horsename, birth, breed
                , gender, familly, withers, girthFloor, heartGirth,
                length, shoulderGirth, trained, isNervous
            })
        dispatch({ type: 'HORSE_UPDATED' });
    }
}
export const horsesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/horses`)
            .on('value', snapshot => {
                dispatch({
                    type: 'HORSES_FETCH_SUCCESS',
                    payload: snapshot.val()
                });
            });

    };
};
export const horseDelete = (id) => {
    const { currentUser } = firebase.auth();
    return async (dispatch) => {
        await firebase.database()
            .ref(`/users/${currentUser.uid}/horses/${id}`).remove();
        dispatch({ type: 'HIDE_CONFIRM' });
    }
};
export const showConfirm = (idTodelete) => {
    return {
        type: 'SHOW_CONFIRM',
        idTodelete

    }
};
export const hideConfirm = () => {
    return {
        type: 'HIDE_CONFIRM',

    }
};