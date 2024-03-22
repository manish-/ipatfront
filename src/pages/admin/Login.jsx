import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import * as CONSTANTS from '../../constants/Constants';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from './Copyright';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthActions from '../../actions/admin/authenticateActions';

import ProcessingLoader from '../../components/admin/ProcessingLoader';
import { Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

const Login = (props) => {

    let { processing, error, errors, is_loggedin, message } = useSelector(state => {
        //    //console.log(state.Authentication_Reducers);
        return {
            processing: state.Authentication_Reducers.processing,
            error: state.Authentication_Reducers.error,
            errors: state.Authentication_Reducers.errors,
            is_loggedin: state.Authentication_Reducers.is_loggedin,
            message: state.Authentication_Reducers.message
        }
    });

    const dispatch = useDispatch();

    const [loginForm, setLoginForm] = React.useState({
        username: "",
        usernameError: "",
        password: "",
        passwordError: "",
        userType: "admin"
    });

    const LoginFormSubmitHandler = (event) => {
        event.preventDefault();
        let errorFound = false;
        let loginFormFields = { ...loginForm };

        if (loginFormFields.username === '') {
            errorFound = true;
            loginFormFields.usernameError = 'this field is required!';
        }
        if (loginFormFields.password === '') {
            errorFound = true;
            loginFormFields.passwordError = 'this field is required!';
        }

        if (!errorFound) {
            dispatch(AuthActions.fetch_token(loginFormFields));

        } else {
            setLoginForm({ ...loginFormFields });
        }
    };

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Helmet>
                    <title>{CONSTANTS.TITLE_PREFIX} | {props.title}</title>
                </Helmet>
                {
                    processing ? <ProcessingLoader processing={processing} /> : ""
                }
                {
                    is_loggedin ? <Navigate to="/admin/dashbaord" /> : ""
                }
               
                <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(../login_left_image.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={(e) => LoginFormSubmitHandler(e)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                value={loginForm.username}
                                onChange={(e) => setLoginForm({ ...loginForm, username: e.currentTarget.value, usernameError: '' })}
                                error={loginForm.usernameError ? true : false}
                                helperText={loginForm.usernameError}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                                value={loginForm.password}
                                onChange={(e) => setLoginForm({ ...loginForm, password: e.currentTarget.value, passwordError: "" })}
                                error={loginForm.passwordError ? true : false}
                                helperText={loginForm.passwordError}
                            />
                            {/*
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                    />*/}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={(processing || loginForm.password === '' || loginForm.username === '' || loginForm.usernameError || loginForm.passwordError) ? true : false}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {/*
                                <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                    */}
                                </Grid>
                                <Grid item>
                                    {/*
                                        <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link> */}
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </ThemeProvider>
        </Fragment>

    );
}

export default Login;