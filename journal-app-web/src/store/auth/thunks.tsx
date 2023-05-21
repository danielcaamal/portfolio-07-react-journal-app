import { IRegisterRequest, apiRegisterProvider, apiLoginProvider, ILoginRequest } from "../../auth";
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle, logout as logoutFirebase } from "../../firebase/providers";
import { checking, login, logout } from "./authSlice"

export const checkingAuthentication = ({ email, password} : { email: string, password: string}) => {
    return async (dispatch: any) => {
        dispatch(checking());
    }
}

export const startGoogleSignInPopUp = () => {
    return async (dispatch: any) => {
        dispatch(checking());
        const result = await signInWithGoogle();
        if (!result.ok) dispatch(logout({ errorMessage: result.errorMessage }));
        dispatch(login(result));
    }
}

// Register with google firebase
export const startFirebaseRegister = ({ email, password } : { email: string, password: string }) => {
    return async (dispatch: any) => {
        dispatch(checking());
        const result = await registerUserWithEmailPassword({ email, password });
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
        dispatch(login(result));
    }
}

// Login with google firebase
export const startFirebaseLogin = ({ email, password } : { email: string, password: string }) => {
    return async (dispatch: any) => {
        dispatch(checking());
        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
        dispatch(login(result));
    }
}

// logout with google firebase
export const startFirebaseLogout = () => {
    return async (dispatch: any) => {
        await logoutFirebase();
        dispatch(logout({}));
    }
}


// Register with API
export const startApiRegister = (registerRequest: IRegisterRequest) => {
    return async (dispatch: any) => {
        dispatch(checking());
        const result = await apiRegisterProvider(registerRequest);
        if (result.message) return dispatch(logout({ errorMessage: result.message }));
        localStorage.setItem('user', JSON.stringify(result));
        dispatch(login(result));
    }
}


// Login with API
export const startApiLogin = (loginRequest: ILoginRequest) => {
    return async (dispatch: any) => {
        dispatch(checking());
        const result = await apiLoginProvider(loginRequest);
        if (result.message) return dispatch(logout({ errorMessage: result.message }));
        localStorage.setItem('user', JSON.stringify(result));
        dispatch(login(result));
    }
}

// logout with API

export const startApiLogout = () => {
    return async (dispatch: any) => {
        localStorage.removeItem('user');
        dispatch(logout({}));
    }
}



