import React, { useEffect } from 'react';
import { Container, Typography, Button, Card, CardContent, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Purchase: React.FC = () => {

    const navigate = useNavigate()



    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    })

    return (
        <Container style={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Purchase Page
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Product Name
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Price:
                    </Typography>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Payment Method</FormLabel>
                        <RadioGroup aria-label="payment-method" name="payment-method"  >
                            <FormControlLabel value="creditCard" control={<Radio />} label="Credit/Debit Card" />
                            <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Cash on Delivery" />
                        </RadioGroup>
                    </FormControl>

                </CardContent>

            </Card>
            <Button onClick={() => { navigate("/helmets") }} style={{ marginTop: "15px" }} variant="contained" color="primary">
                BACK TO HELMETS
            </Button>
            <Button onClick={() => { navigate("/accessories") }} style={{ marginTop: "15px", marginLeft: "15px" }} variant="contained" color="primary">
                BACK TO ACCESSORIES
            </Button>
        </Container >
    );
};

export default Purchase;
