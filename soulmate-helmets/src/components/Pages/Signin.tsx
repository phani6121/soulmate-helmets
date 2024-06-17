import React, { useState, FormEvent } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface SigninProps { }

const defaultTheme = createTheme();

const Signin: React.FC<SigninProps> = () => {

    const [userData, setUserData] = useState<any>({
        username: "",
        email: "",
        phoneNumber: "",
        password1: "",
        password2: ""
    });

    const { username, email, phoneNumber, password1, password2 } = userData

    const changeHandler = (event: any) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate();

    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

    const handlePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const handlePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };


    const isValidate = () => {
        let isProceed = true;

        let errorMessage = "Please enter the value"

        if (username === null || username === "") {
            isProceed = false
            errorMessage += " Username "
        }
        if (email === null || email === "") {
            isProceed = false
            errorMessage += "Email "
        }
        if (phoneNumber === null || phoneNumber === "") {
            isProceed = false
            errorMessage += "Phone Number "
        }
        if (password1 === null || password1 === "") {
            isProceed = false
            errorMessage += "Password1 "
        }
        if (password2 === null || password2 === "") {
            isProceed = false
            errorMessage += "Password2"
        }

        if (!isProceed) {
            toast.warning(errorMessage)

        } else
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userData.email)) {

            } else {
                isProceed = false
                toast.warning("Please enter valid email")
            }
        return isProceed;
    }

    const handleSignUp = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (isValidate()) {

            if (userData.password1 === userData.password2) {
                const signinObj = { id: username, username, email, phoneNumber, password1, password2 };
                fetch("http://localhost:8000/user", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(signinObj)
                }).then(() => {
                    toast.success("Signin successful");
                    navigate("/login")
                }).catch((err) => {
                    toast.error("Failed to signin:" + err.message);
                });
            } else {
                setPasswordMatch(false);
            }
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up Details
                    </Typography>
                    <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={username}
                                    onChange={changeHandler}
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="username"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={email}
                                    onChange={changeHandler}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={phoneNumber}
                                    onChange={changeHandler}
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="tel"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={userData.password1}
                                    onChange={changeHandler}
                                    required
                                    fullWidth
                                    name="password1"
                                    placeholder='Password'
                                    label="Password"
                                    type={showPassword1 ? 'text' : 'password'}
                                    id="password1"
                                    autoComplete="new-password"
                                    error={!passwordMatch}
                                    helperText={!passwordMatch && "Passwords do not match"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handlePasswordVisibility1}
                                                    edge="end"
                                                >
                                                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={userData.password2}
                                    onChange={changeHandler}
                                    required
                                    fullWidth
                                    name="password2"
                                    placeholder='Re-enter Password'
                                    label="Re-enter Password"
                                    type={showPassword2 ? 'text' : 'password'}
                                    id="password2"
                                    autoComplete="new-password"
                                    error={!passwordMatch}
                                    helperText={!passwordMatch && "Passwords do not match"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handlePasswordVisibility2}
                                                    edge="end"
                                                >
                                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Signin;
