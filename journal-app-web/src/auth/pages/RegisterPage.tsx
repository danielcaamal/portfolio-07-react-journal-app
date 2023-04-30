import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layouts";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks";
import { useState, useMemo } from 'react';
import { AuthStatus, startApiRegister, startFirebaseRegister } from "../../store/auth";

const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidations = {
    email: [(value:string) => value.includes('@'), 'Invalid email address'],
    password: [(value:string) => value.length > 7, 'Password must be at least 8 characters'],
    displayName: [(value:string) => value.length > 2, 'Name must be at least 3 characters']
}

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const { status, errorMessage } = useAppSelector(state => state.auth);
    console.log(status, errorMessage);
    const isCheckingAuthentication = useMemo(() => status === AuthStatus.CHECKING, [status]);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { 
        formState: { email, password, displayName }, 
        isFormValid, 
        onInputChange, 
        formValidation: { displayNameValid, emailValid, passwordValid }, 
    } = useForm(formData, formValidations);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;
        dispatch(startApiRegister({ email, password, displayName, photoURL: '', username: '' }));
        // dispatch(startFirebaseRegister({ email, password }));
    };

    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Full name"
                            type="text"
                            placeholder="Your name"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Email"
                            type="email"
                            placeholder="email@email.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                disabled={isCheckingAuthentication}
                                >
                            <Typography>Register</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                        >
                        <Typography>
                            Already registered?
                            <Link
                                sx= {{ ml: 1 }}
                                component={RouterLink}
                                color= "inherit"
                                to="/auth/login"
                                >Sign in
                            </Link>
                        </Typography>
                        
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}