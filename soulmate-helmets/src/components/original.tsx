import React from 'react'

const original = () => {
    return (
        <div>

        </div>
    )
}

// export default original

// import React, { useState } from 'react'
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const defaultTheme = createTheme();


// const Signin: React.FC = () => {

//     const [username, setUsername] = useState<String>("")
//     const [email, setEmail] = useState<String>("")
//     const [phoneNumber, setPhoneNumber] = useState<string>("")
//     const [password1, setPassword1] = useState<String>("")
//     const [password2, setPassword2] = useState<String>("")

//     const [showPassword, setShowPassword] = useState<boolean>(false);
//     // Above the state to maintain to password visibility based on onClick function (handlePasswordVisibility)
//     const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
//     // Above the state to maintain to match the password and reEnterPassword based on condition
//     const [password, setPassword] = useState<string>('');
//     // Above the state to maintain to password based on onClick function (handlePasswordChange)
//     const [reEnterPassword, setReEnterPassword] = useState<string>('');
//     // Above the state to maintain to password based on onClick function (handleReEnterPasswordChange)


//     const handlePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//     // Above the function for Hide and Show OnClick function.

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };
//     // Above the function for onChange to password value.

//     const handleReEnterPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setReEnterPassword(event.target.value);
//     };
//     // Above the function for onChange to password value.

//     const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (password === reEnterPassword) {
//             // Passwords match, proceed with sign up
//             // console.log('Passwords match. Proceed with sign up.');
//         } else {
//             // Passwords do not match
//             // console.log('Passwords do not match.');
//             setPasswordMatch(false);
//         }

//         let signinObj = { username, email, phoneNumber, password1, password2 }
//         // console.log(signinObj);

//         fetch("http://localhost:8000/user", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(signinObj)
//         }).then((res) => {
//             toast.success("signin successfully")
//         }).then((err) => {
//             toast.error("Failed")
//         })


//         // const data = new FormData(event.currentTarget);
//         // console.log({
//         //     Username: data.get('Username'),
//         //     email: data.get('email'),
//         //     PhoneNumber: data.get('Phone Number'),
//         //     password: data.get('password'),
//         //     reEnterPassword: data.get('reEnterPassword'),
//         // });
//     };

//     // const navigate = useNavigate();
//     // // Above the line navigate state for navigation. That state return the function

//     // const navigateToLoginPage = () => {
//     //     navigate("/")
//     // }
//     // // Above onClick function for navigation.


//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Typography component="h1" variant="h5">
//                         Sign up Details
//                     </Typography>
//                     <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 3 }}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     value={username}
//                                     onChange={event => setUsername(event.target.value)}
//                                     autoComplete="given-name"
//                                     name="username"
//                                     required
//                                     fullWidth
//                                     id="username"
//                                     label="username"
//                                     autoFocus
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     value={email}
//                                     onChange={event => setEmail(event.target.value)}
//                                     required
//                                     fullWidth
//                                     id="email"
//                                     label="Email Address"
//                                     name="email"
//                                     autoComplete="email"
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     value={phoneNumber}
//                                     onChange={event => setPhoneNumber(event.target.value)}
//                                     required
//                                     fullWidth
//                                     id="Phone Number"
//                                     label="Phone Number"
//                                     name="Phone Number"
//                                     autoComplete="Phone Number"
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     value={password1}
//                                     onChange={event => setPassword1(event.target.value)}
//                                     required
//                                     fullWidth
//                                     name="password"
//                                     placeholder='Password'
//                                     label="Password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     id="password"
//                                     autoComplete="new-password"
//                                     // onChange={handlePasswordChange}
//                                     error={!passwordMatch}
//                                     helperText={!passwordMatch && "Passwords do not match"}
//                                     InputProps={{
//                                         endAdornment: (
//                                             <InputAdornment position="end">
//                                                 <IconButton
//                                                     aria-label="toggle password visibility"
//                                                     onClick={handlePasswordVisibility}
//                                                     edge="end"
//                                                 >
//                                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                                 </IconButton>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     value={password2}
//                                     onChange={event => setPassword2(event.target.value)}
//                                     required
//                                     fullWidth
//                                     name="reEnterPassword"
//                                     placeholder='Re-enter Password'
//                                     label="Re-enter Password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     id="reEnterPassword"
//                                     autoComplete="new-password"
//                                     // onChange={handleReEnterPasswordChange}
//                                     error={!passwordMatch}
//                                     helperText={!passwordMatch && "Passwords do not match"}
//                                     InputProps={{
//                                         endAdornment: (
//                                             <InputAdornment position="end">
//                                                 <IconButton
//                                                     aria-label="toggle password visibility"
//                                                     onClick={handlePasswordVisibility}
//                                                     edge="end"
//                                                 >
//                                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                                 </IconButton>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button
//                             // onClick={navigateToLoginPage}
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign Up
//                         </Button>
//                         <Grid container justifyContent="flex-end">
//                         </Grid>
//                     </Box>
//                 </Box>
//             </Container>
//         </ThemeProvider>
//     )
// }

// export default Signin;



// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//     Tab,
//     Tabs,
//     Typography,
// } from "@mui/material";

// const Navbar: React.FC = () => {
//     const [value, setValue] = useState(0);

//     const navigate = useNavigate();

//     const handleTabChange = (newValue: number) => {
//         // if (value)
//         setValue(newValue);
//         // You can add logic here to navigate based on the tab index
//     };

//     const navigateToLoginPage = () => {
//         navigate("/login");
//     };

//     return (
//         <AppBar sx={{ background: "#063970" }}>
//             <Toolbar id="back-to-top-anchor">
//                 <Typography color={"goldenrod"} variant='h6'>SOULMATE HELMETS</Typography>
//                 <Tabs
//                     sx={{ marginRight: "auto", marginLeft: "100px" }}
//                     indicatorColor="secondary"
//                     textColor="inherit"
//                     value={value}
//                     onChange={(e, newValue) => handleTabChange(newValue)}
//                 >
//                     <Tab label="DashBoard" component={Link} to="/" />
//                     <Tab label="Helmets" component={Link} to="/helmets" />
//                     <Tab label="Accessories" component={Link} to="/accessories" />
//                     <Tab label="About Us" component={Link} to="/about" />
//                     <Tab label="Warranty" component={Link} to="/warranty" />
//                 </Tabs>
//                 <Button onClick={navigateToLoginPage} variant="contained">
//                     Logout
//                 </Button>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Navbar;


//  </Container >
//     {/* Forgot password dialog/modal */ }
// {
//     showForgotPassword && (
//         <div>
//             <div onClick={handleCloseForgotPassword} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)' }} />
//             <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999, background: '#fff', padding: '20px', borderRadius: '5px' }}>
//                 <ForgotPassword />
//             </div>
//         </div>
//     )
// }
//         </ThemeProvider >

// const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
// import { Link as RouterLink } from 'react-router-dom';
// import ForgotPassword from './ForgotPassword';












// import React, { useEffect, useState } from 'react';
// import { Typography, Grid, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../Layout/Footer';


// const Dashboard: React.FC = () => {
//     const navigate = useNavigate();
//     const [totalCollection, setTotalCollection] = useState<number>(0);
//     const [profit, setProfit] = useState<number>(0);
//     const [eachPersonShare, setEachPersonShare] = useState<number>(0);
//     const [persons] = useState<number>(4); // Assuming 4 persons share the profit
//     const [helmets, setHelmets] = useState<any[]>([]); // State for helmets
//     const [accessories, setAccessories] = useState<any[]>([]); // State for accessories
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const fetchHelmets = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/helmets');
//                 if (response.ok) {
//                     const data = await response.json();
//                     // Convert price strings with commas to numbers
//                     const helmetsWithParsedPrices = data.map((helmet: any) => ({
//                         ...helmet,
//                         price: parseFloat(helmet.price.replace(/,/g, '')), // Remove commas and parse to float
//                         //  helmet.price: Accesses the price property of the current helmet object.
//                         // .replace(/,/g, ''): Uses a regular expression(/, /g) to globally (g flag) replace all commas (/ characters in the regular expression) with an empty string('').This removes commas from the price string.
//                         // parseFloat(...): Converts the resulting string(after removing commas) into a floating - point number.This function parses a string argument and returns a floating - point number.

//                         //parseFloat() parses a string and returns the first number
//                     }));
//                     setHelmets(helmetsWithParsedPrices);
//                 } else {
//                     throw new Error('Failed to fetch helmets');
//                 }
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchAccessories = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/accessories');
//                 if (response.ok) {
//                     const data = await response.json();
//                     // Convert price strings with commas to numbers
//                     const accessoriesWithParsedPrices = data.map((accessory: any) => ({
//                         ...accessory,
//                         price: parseFloat(accessory.price.replace(/,/g, '')), // Remove commas and parse to float
//                     }));
//                     setAccessories(accessoriesWithParsedPrices);
//                 } else {
//                     throw new Error('Failed to fetch accessories');
//                 }
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchHelmets();
//         fetchAccessories();
//     }, []);

//     useEffect(() => {
//         let username = sessionStorage.getItem('username');
//         if (username === '' || username === null) {
//             navigate('/login');
//         }
//     }, [navigate]);

//     useEffect(() => {
//         // Calculate total collection from helmets and accessories
//         const totalHelmetsPrice = helmets.reduce((acc, helmet) => acc + helmet.price, 0);
//         // Uses reduce method to sum up all price values in the helmets array.
//         // acc is the accumulator that starts from 0 and accumulates the sum of prices.
//         // helmet.price accesses the price of each helmet object.
//         // This calculates the total price of all helmets
//         const totalAccessoriesPrice = accessories.reduce((acc, accessory) => acc + accessory.price, 0);
//         const total = totalHelmetsPrice + totalAccessoriesPrice;
//         setTotalCollection(total);

//         // Calculate profit (assuming 39% of total collection)
//         const calculatedProfit = (39 / 100) * total; // 39% of total collection
//         setProfit(calculatedProfit);

//         // Calculate each person's share
//         const calculatedShare = calculatedProfit / persons;
//         setEachPersonShare(calculatedShare);
//     }, [helmets, accessories, persons]);

//     if (loading) {
//         return <Typography>Loading...</Typography>; // Show loading indicator while fetching data
//     }

//     return (
//         <div>
//             <Box
//                 sx={{
//                     backgroundColor: "#FFFAFA",
//                     color: "black",
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     minHeight: '50vh', // Ensure the content takes up the full height of the page
//                     paddingBottom: '60px', // Ensure space for the footer
//                 }}
//             >
//                 <Grid container spacing={2} sx={{ textAlign: 'center', maxWidth: 800 }}>
//                     <Grid item xs={12}>
//                         <Typography variant="h4" gutterBottom>Accounts Information</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="body1">
//                             <strong>Total Collection:</strong> {totalCollection.toLocaleString()} Rupees
//                             {/* toLocaleString(): This is a JavaScript method available on numbers (like totalCollection) that converts a number into a string using a locale-specific format. It adds commas as thousand separators and uses the appropriate decimal separator for the locale. For example, in India, it would format 1000000 as 10,00,000 */}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="body1">
//                             <strong>Profit:</strong> {profit.toLocaleString()} Rupees
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="body1">
//                             <strong>Persons:</strong> {persons}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="body1">
//                             <strong>Each Person Share:</strong> {eachPersonShare.toLocaleString()} Rupees
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Box>

//             <Footer />

//         </div>
//     );
// };

// export default Dashboard;




