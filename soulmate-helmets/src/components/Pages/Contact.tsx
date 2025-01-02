import React, { useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import Footer from '../Layout/Footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Contact: React.FC = () => {
    // State for form inputs
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Validate phone number (should be 10 digits)
    const validatePhone = (phone: string) => {
        return phone.length === 10 && /^[0-9]{10}$/.test(phone);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validations
        if (!name) {
            setError("Name is required.");
            return;
        }

        if (!validatePhone(phone)) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!message) {
            setError("Message is required.");
            return;
        }

        const formData = {
            name,
            phone,
            email,
            message
        };

        try {
            const response = await fetch('http://localhost:8000/userDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                // Reset form after successful submission
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setError('');
            } else {
                alert('Failed to send the message');
            }
        } catch (error:any) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div>
            <div
                style={{
                    backgroundColor: "#FFFAFA",
                    height: "110vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Container maxWidth="md" style={{ textAlign: "center", padding: "0px 20px", color: "black", marginTop: "100px" }}>
                    <Typography variant="h4" gutterBottom>
                        Contact Information
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ marginTop: "30px" }}>
                            <Typography variant="body1">
                                <strong>Email:</strong> soulmatehelmets@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "10px" }}>
                            <Typography variant="body1">
                                <strong>Mobile Number:</strong> +91-8985585500
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "10px", marginBottom: "115px" }}>
                            <Typography variant="body1">
                                <strong>Address:</strong> Near Addinki Bus Stand, Opposite Petrol Bunk, <br />Ongole, Prakasam District, Andhra Pradesh, India
                            </Typography>
                        </Grid>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                backgroundColor: '#FFEFD5', // Set background color to black
                                padding: '20px', // Optional: to add some padding around the form
                                borderRadius: '8px', marginBottom: "150px" // Optional: to round the corners of the form
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            {error && <Typography color="error">{error}</Typography>} {/* Display error message */}
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="NAME"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: { color: 'black' } // Change label color to black
                                    }}
                                    InputProps={{
                                        style: { color: 'black' } // Change input text color to black
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="PHONE NUMBER"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    InputLabelProps={{
                                        style: { color: 'black' } // Change label color to black
                                    }}
                                    InputProps={{
                                        style: { color: 'black' } // Change input text color to black
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputLabelProps={{
                                        style: { color: 'black' } // Change label color to black
                                    }}
                                    InputProps={{
                                        style: { color: 'black' } // Change input text color to black
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="MESSAGE"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    InputLabelProps={{
                                        style: { color: 'black' } // Change label color to black
                                    }}
                                    InputProps={{
                                        style: { color: 'black' } // Change input text color to black
                                    }}
                                />
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: "rgba(0,0,0,0.5)", marginTop: "20px" }}
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                >
                                    Send
                                </Button>
                            </div>
                        </Box>
                    </Grid>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
