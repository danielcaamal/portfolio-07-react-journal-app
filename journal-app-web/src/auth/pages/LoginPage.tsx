// React Imports
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

// Local Imports
import { AuthLayout } from "../layouts";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks";
import { AuthStatus, checkingAuthentication, startGoogleSignInPopUp, startFirebaseLogin, startApiLogin } from "../../store";
import { useMemo, useState } from 'react';

const formValidations = {
    email: [(value:string) => value.includes('@'), 'Invalid email address'],
    password: [(value:string) => value.length > 7, 'Password must be at least 8 characters'],
}

const formInitialValues = {
    email: '',
    password: ''
}

export const LoginPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const { status, errorMessage } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const { formState: { email, password }, formValidation: { emailValid, passwordValid }, onInputChange } = useForm(formInitialValues, formValidations);


    const isAuthenticated = useMemo(() => status === AuthStatus.AUTHENTICATED,[status]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);
        // dispatch(startFirebaseLogin({ email, password }));
        dispatch(startApiLogin({ email, password }));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignInPopUp());
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Email"
                            type="email"
                            placeholder="email@email.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            disabled={isAuthenticated}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            disabled={isAuthenticated}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
                        <Alert severity="error">
                            {errorMessage}
                        </Alert>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                disabled={isAuthenticated}
                                >
                            <Typography sx={{ ml: 1 }}>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                onClick={onGoogleSignIn}
                                disabled={isAuthenticated}
                                >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                        >
                        <Link
                            component={RouterLink}
                            color= "inherit"
                            to="/auth/register"
                            >
                            Create an account</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}