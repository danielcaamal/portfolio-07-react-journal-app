import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useAppDispatch";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { AuthStatus, login, logout, startLoadingNotes } from "../store";
import { useGraphql } from "../journal/hooks";


export const useCheckAuth = () => {
    const { status } = useAppSelector(state => state.auth);
    const { findAllByUserId } = useGraphql();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // checkStateFirebase();
        checkStateApi();
    }, [status]);

    const checkStateFirebase = () => {
        return onAuthStateChanged(FirebaseAuth, (user) => {
            if (user) {
                dispatch(login({
                    status: AuthStatus.AUTHENTICATED,
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    errorMessage: null,
                }));
            } else {
                dispatch(logout(user));
            }
        });
    }

    const checkStateApi = () => {
        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        if (user.email) {
            dispatch(login({
                status: AuthStatus.AUTHENTICATED,
                uid: user.uid || user.id,
                id: user.id || user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                errorMessage: null,
            }));
            dispatch(startLoadingNotes(findAllByUserId));
        } else {
            dispatch(logout(user));
        }
    };

    return {
        status,
    }
};