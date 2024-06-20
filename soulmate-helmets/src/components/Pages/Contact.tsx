import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Footer from '../Layout/Footer';

const Contact: React.FC = () => {
    return (
        <div style={{ backgroundColor: "#0a5eb9", height: "90vh" }}>
            <Container maxWidth="md" style={{ textAlign: "center", padding: "0px 220px", color: "white" }}>
                <Typography style={{}} variant="h4" gutterBottom>Contact Information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ marginTop: "30px" }}>
                        <Typography variant="body1">
                            <strong>Email:</strong> soulmatehelmets@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "10px" }}>
                        <Typography variant="body1">
                            <strong>Mobile Number:</strong>+91-8985585500
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "10px", marginBottom: "115px" }} >
                        <Typography variant="body1">
                            <strong>Address:</strong> Near Addinki Bus Stand, Opposite Petrol Bunk, Ongole ,Prakasam District, Andra Pradesh, India
                        </Typography>
                    </Grid>
                </Grid>
            </Container >
            <Footer />
        </div >
    );
}

export default Contact;
