export enum AuthStatus {
    CHECKING = 'checking',
    AUTHENTICATED = 'authenticated',
    NOT_AUTHENTICATED = 'not-authenticated'
}

export interface AuthState {
    status: AuthStatus;
    id: string | null;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}

export const authInitialState: AuthState = {
    status: AuthStatus.NOT_AUTHENTICATED,
    uid: null,
    id: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};