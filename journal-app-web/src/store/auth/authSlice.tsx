import { createSlice } from '@reduxjs/toolkit';
import { authInitialState, AuthStatus } from './authState';

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login: (state, action) => {
            state.status = AuthStatus.AUTHENTICATED;
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = AuthStatus.NOT_AUTHENTICATED;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checking: (state) => {
            state.status = AuthStatus.CHECKING;
        }
    }
});

export const { login, logout, checking } = authSlice.actions;