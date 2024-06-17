import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const defaultTheme = createTheme();

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false);

    useEffect(() => {
        sessionStorage.clear();
    }, [])

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const navigateToSigninPage = () => {
        navigate("/signin")
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate()) {
            fetch("http://localhost:8000/user").then((response) => {
                return response.json();
            }).then((data) => {
                const isExitUser = data.some((user: any) => user.username === username && user.password1 === password);
                // Some method is to check the whole data of users based on check the condition result will send only true or false
                if (isExitUser) {
                    toast.success("success")
                    navigate("/");
                    sessionStorage.setItem("username", username)
                } else {
                    const userData = data.find((user: any) => user.username === username);
                    // Find method to check and get data of user whole object
                    if (userData) {
                        toast.error("please enter valid Password");
                    } else {
                        toast.error("please enter valid UserName");
                    }
                }
            })
        }

    };

    const validate = () => {

        let result = true;
        if (username === "" || username === null) {
            result = false;
            toast.warning("Please enter username");
        }
        if (password === "" || password === null) {
            result = false;
            toast.warning("Please enter password");
        }
        return result;
    }

    return (
        <>
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
                            Login User
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="Username"
                                placeholder='Username'
                                label="Username"
                                name="Username"
                                autoComplete="Username"
                                autoFocus
                            />
                            <TextField
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                placeholder='Password'
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handlePasswordVisibility}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container>
                                <Grid item xs>
                                    <Link onClick={() => { navigate("/forgotPassword") }} href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={navigateToSigninPage}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Button

                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Log In
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Login;