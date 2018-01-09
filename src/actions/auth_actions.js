import { firebase } from '../firebase/firebase';
import Expo from 'expo';


const RegisterSucces = (dispatch, uid) => {
    dispatch({
        type: 'REGISTER_SUCCESS',
        uid
    });
};
const RegisterFailed = (error) => {
    return {
        type: 'REGISTER_FAILED',
        error: error.message
    }
};
export const registerWithEmail = ({ email, password }) => async (dispatch) => {
    try {
        dispatch({
            type: 'BEGIN_LOGIN'
        })
        let register = await firebase.auth().createUserWithEmailAndPassword(email, password);
        let uid = register.uid;
        RegisterSucces(dispatch, uid);
    } catch (e) {

        dispatch(RegisterFailed(e));
    }
}
export const LoginWithEmail = ({ email, password }, onSubmitSuccess) => async (dispatch) => {
    try {
        dispatch({
            type: 'BEGIN_LOGIN'
        })
        let register = await firebase.auth().signInWithEmailAndPassword(email, password);
        // console.log(register);
        let uid = register.uid;
        LoginSucces(dispatch, uid);
        onSubmitSuccess();
    } catch (e) {
        dispatch(LoginFailed(e));
    }
}

const LoginSucces = (dispatch, uid) => {
    dispatch({
        type: 'LOGIN_SUCCESS',
        uid
    });
};
const LoginFailed = (error) => {

    return {
        type: 'LOGIN_FAILED',
        error: error.message
    }
};
export const EmailChanged = (email) => {
    return {
        type: 'EMAIL_CHANGED',
        email
    };
};
export const PasswordChanged = (password) => {
    return {
        type: 'PASSWORD_CHANGED',
        password
    };
};
export const ConfirmPasswordChanged = (password) => {
    return {
        type: 'CONFIRM_PASSWORD_CHANGED',
        password
    };
};
export const PasswordDontMatch = () => {
    return {
        type: 'PASSWORD_DONT_MATCH'
    }
}
export const loginGoogle = (onSubmitSuccess) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'BEGIN_LOGIN'
            })
            const result = await Expo.Google.logInAsync({
                // androidClientId: YOUR_CLIENT_ID_HERE,
                iosClientId: '81591388788-o1dco6203edpo4cc17hhamk8k8d7sfo4.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            const exist = await firebase.auth().fetchProvidersForEmail(result.user.email);
            if (exist.length > 0) {
                const credential = await firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
                const fire = await firebase.auth().signInWithCredential(credential);
                dispatch({
                    type: 'GOOGLE_LOGIN_SUCCESS',
                    uid: fire.uid,
                    email: fire.email
                });
                onSubmitSuccess();
            }
            else {
                dispatch({
                    type: 'GOOGLE_LOGIN_DONT_EXIST'
                });
            }

        } catch (e) {
            dispatch(LoginFailed(e));
        }
    }
};
export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'BEGIN_LOGIN'
            })
            const result = await Expo.Google.logInAsync({
                // androidClientId: YOUR_CLIENT_ID_HERE,
                iosClientId: '81591388788-o1dco6203edpo4cc17hhamk8k8d7sfo4.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            const credential = await firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
            const fire = await firebase.auth().signInWithCredential(credential);
            if (result.type === 'success') {
                dispatch({
                    type: 'GOOGLE_LOGIN_SUCCESS',
                    uid: fire.uid,
                    email: fire.email
                })
            } else {
                dispatch({
                    type: 'GOOGLE_LOGIN_FAILED'
                })

            }
        } catch (e) {
            dispatch(LoginFailed(e));
        }
    }
};
export const loginFacebook = (onSubmitSuccess) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'BEGIN_LOGIN'
            })
            const result = await Expo.Facebook.logInWithReadPermissionsAsync('430556697359357', {
                permissions: ['public_profile', 'email'],
            });
            const cred = await firebase.auth.FacebookAuthProvider.credential(result.token);
            const fire = await firebase.auth().signInWithCredential(cred);
            // console.log('created:'+ fire.metadata.creationTime );
            // console.log('lastsign:'+ fire.metadata.lastSignInTime);

            if (fire.metadata.creationTime !== fire.metadata.lastSignInTime) {
                dispatch({
                    type: 'FACEBOOK_LOGIN_SUCCESS',
                    uid: fire.uid,
                    email: fire.email
                });
                onSubmitSuccess();
            }
            else {
                // await firebase.auth().currentUser.delete();
                dispatch({
                    type: 'FACEBOOK_LOGIN_DONT_EXIST'
                });
            }

        } catch (e) {
            dispatch(LoginFailed(e));
        }
    }
};
export const startFacebookLogin = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'BEGIN_LOGIN'
            })
            const result = await Expo.Facebook.logInWithReadPermissionsAsync('430556697359357', {
                permissions: ['public_profile', 'email'],
            });
            const cred = await firebase.auth.FacebookAuthProvider.credential(result.token);
            const fire = await firebase.auth().signInWithCredential(cred)
            if (result.type === 'success') {
                dispatch({
                    type: 'FACEBOOK_LOGIN_SUCCESS',
                    uid: fire.uid,
                    email: fire.email
                })
            } else {
                return {
                    type: 'FACEBOOK_LOGIN_FAILED'
                };
            }
        } catch (e) {
            dispatch(LoginFailed(e));
        }
    }
};
export const ResetPassword = (email) => {
    return async (dispatch) => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            dispatch({
                type: 'RESET_PASSWORD'
            });
        } catch (e) {
            console.log(e);
        }
    }
};
export const CloseModal = () => ({
    type: 'CLOSE_MODAL'
});
export const LogOut = () => ({
    type: 'LOGOUT'
});

export const startLogOut = () => {
    return async (dispatch) => {
        try {
            const { currentUser } = firebase.auth();
            await firebase.auth().signOut();

            dispatch({ type: 'BEGIN_LOGOUT' });
        } catch (e) {
            console.log(e);
        }

    };
}