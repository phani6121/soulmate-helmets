import React, { useState } from 'react';
import { TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);



    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div style={{ textAlign: "center" }}>

            <form >
                <Typography variant="h4" gutterBottom>FORGOT PASSWORD</Typography>
                <div>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        variant="outlined"
                        style={{ alignItems: "center", marginBottom: '16px', width: "30%" }}
                        InputProps={{
                            autoComplete: "username", // Add autocomplete attribute
                        }}
                    />

                </div>
                <div>
                    <TextField
                        label="New Password"
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        fullWidth
                        variant="outlined"
                        style={{ alignItems: "center", marginBottom: '16px', width: "30%" }}
                        autoComplete="new-password" // Add autocomplete attribute directly to the TextField component
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowNewPassword}
                                        edge="end"
                                    >
                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div>
                    <TextField
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        fullWidth
                        variant="outlined"
                        style={{ alignItems: "center", marginBottom: '16px', width: "30%" }}
                        autoComplete="confirm-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowConfirmPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
            </form>

            <Button sx={{ marginRight: "15px" }} variant="contained">Reset Password</Button>
            <Button
                onClick={() => {
                    navigate("/login")
                }}

                variant="contained"
            >
                BACK TO LOGIN
            </Button>
        </div>
    )

}
export default ForgotPassword;
