import { GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "./config";
import { IUser } from "../auth";

const googleProvider = new GoogleAuthProvider();

interface ICredentials extends IUser {
    ok: boolean;
    errorMessage: string | null;
}

export const signInWithGoogle = async () : Promise<ICredentials> => {
    const credentials: ICredentials = {
        ok: false,
        displayName: '',
        email: '',
        photoURL: '',
        id: '',
        errorMessage: null,
    }
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const googleCredentials = GoogleAuthProvider.credentialFromResult(result);
        return {
            ...credentials,
            displayName: result.user?.displayName || '',
            email: result.user?.email || '',
            photoURL: result.user?.photoURL || '',
            id: result.user?.uid || '',
            ok: true,
        }
    } 
    catch (error:any) {
        console.log(error);
        return {
            ...credentials,
            errorMessage: getErrorFirebase(error),
        }
    }
};

export const registerUserWithEmailPassword = async ({ email, password} : { email:string, password: string}) : Promise<ICredentials> => {
    const credentials: ICredentials = {
        ok: false,
        displayName: '',
        email: '',
        photoURL: '',
        id: '',
        errorMessage: null,
    }
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        await updateProfile(FirebaseAuth.currentUser as User, {
            displayName: email,
        });

        return {
            ...credentials,
            displayName: email,
            email: result.user?.email || '',
            photoURL: result.user?.photoURL || '',
            id: result.user?.uid || '',
            ok: true,
        }
    }
    catch (error:any) {
        return {
            ...credentials,
            errorMessage: getErrorFirebase(error),
        }
    }
};

export const loginWithEmailPassword = async ({ email, password} : { email:string, password: string}) : Promise<ICredentials> => {
    const credentials: ICredentials = {
        ok: false,
        displayName: '',
        email: '',
        photoURL: '',
        id: '',
        errorMessage: null,
    }
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        return {
            ...credentials,
            displayName: email,
            email: result.user?.email || '',
            photoURL: result.user?.photoURL || '',
            id: result.user?.uid || '',
            ok: true,
        }
    }
    catch (error:any) {
        return {
            ...credentials,
            errorMessage: getErrorFirebase(error),
        }
    }
};

export const logout = async () => {
    await FirebaseAuth.signOut();
};

const getErrorFirebase = (error: any): string => {
    if (error.code === 'auth/wrong-password') {
        return 'Invalid credentials';
    }

    if (error.code === 'auth/user-not-found') {
        return 'Invalid credentials';
    }

    if (error.code === 'auth/email-already-in-use') {
        return 'Email already in use';
    }

    return 'Register error';
}