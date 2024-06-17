import React, { useState } from 'react';
import { TextField, Typography, Grid, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Addhelmets: React.FC = () => {
    const navigate = useNavigate();
    const [helmetsData, setHelmetsData] = useState<any>({
        name: '',
        price: '',
        image: '',
    });

    const { name, price, image } = helmetsData;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHelmetsData({ ...helmetsData, [event.target.name]: event.target.value });
    };
    const isValidate = () => {
        let isProceed = true;

        let errorMessage = "Please upload the "

        if (name === null || name === "") {
            isProceed = false
            errorMessage += " Name "
        }
        if (price === null || price === "") {
            isProceed = false
            errorMessage += "Price "
        }
        // if (image === null || image === "") {
        //     isProceed = false
        //     errorMessage += "Image "
        // } 
        if (!isProceed) {
            toast.warning(errorMessage)

        } else
            if (/^\d{1,3}(,\d{3})*(\.\d{1,2})?$/.test(helmetsData.price)
            ) {

            } else {
                isProceed = false
                toast.warning("Please enter valid price")
            }
        return isProceed;
    }

    const uploadHandler = async () => {

        if (isValidate()) {
            try {
                const helmetsData = { id: name, name, price, image };
                const response = await fetch('http://localhost:8000/helmets', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(helmetsData),
                });
                if (response.ok) {
                    toast.success('Helmet added successfully');
                } else {
                    throw new Error('Failed to add helmet');
                }
            } catch (error: any) {
                toast.error(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <Typography variant='h4' style={{ fontWeight: 'bold', textAlign: 'center' }}>
                ADD HELMET
            </Typography>
            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    value={name}
                    onChange={changeHandler}
                    sx={{ width: '30%', marginTop: '15px' }}
                    id="outlined-basic"
                    name="name"
                    label="NAME OF HELMET"
                    placeholder='NAME OF HELMET'
                    variant="outlined"
                />
                <TextField
                    value={price}
                    onChange={changeHandler}
                    sx={{ width: '30%', marginTop: '15px' }}
                    id="outlined-basic"
                    name="price"
                    label="PRICE"
                    placeholder='PRICE'
                    variant="outlined"
                />
                <TextField
                    value={image}
                    onChange={changeHandler}
                    sx={{ width: '30%', marginTop: '15px' }}
                    id="outlined-basic"
                    type='file'
                    name="image"
                />
                <Button
                    onClick={uploadHandler}
                    sx={{ width: '10%', marginTop: '15px' }}
                    variant="contained"
                >
                    UPLOAD
                </Button>
                <Button
                    onClick={() => {
                        navigate("/helmets")
                    }}
                    sx={{ width: '20%', marginTop: '15px' }}
                    variant="contained"
                >
                    BACK TO HELMETS
                </Button>
            </Grid>
        </div>
    );
}

export default Addhelmets;