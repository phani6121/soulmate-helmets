import React, { useState } from 'react';
import { TextField, Typography, Grid, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Addaccessories: React.FC = () => {
    const navigate = useNavigate();

    const [base64Image, setBase64Image] = useState('');
    const [accessoriesData, setAccessoriesData] = useState<any>({
        name: '',
        price: '',
        image: '',
    });

    const { name, price, image } = accessoriesData;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccessoriesData({ ...accessoriesData, [event.target.name]: event.target.value });

        if (event.target.name === "image") handleFileInputChange(event);
    };

    const isValidate = () => {
        let isProceed = true;

        let errorMessage = "Please upload the ";

        if (name === null || name === "") {
            isProceed = false;
            errorMessage += " Name ";
        }
        if (price === null || price === "") {
            isProceed = false;
            errorMessage += "Price ";
        }
        if (image === null || image === "") {
            isProceed = false;
            errorMessage += "Image ";
        }
        if (!isProceed) {
            toast.warning(errorMessage);
        } else if (!/^\d{1,3}(,\d{3})*(\.\d{1,2})?$/.test(accessoriesData.price)) {
            isProceed = false;
            toast.warning("Please enter valid price");
        }
        return isProceed;
    };

    const handleFileInputChange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String: any = reader.result;
            setBase64Image(base64String);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const uploadHandler = async () => {
        if (isValidate()) {
            try {
                const accessoriesData = { id: name, name, price, image: base64Image };
                const response = await fetch('http://localhost:8000/accessories', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(accessoriesData),
                });
                if (response.ok) {
                    toast.success('Accessories added successfully');
                    navigate('/accessories'); // Navigate to accessories page after successful upload
                } else {
                    throw new Error('Failed to add accessories');
                }
            } catch (error: any) {
                toast.error(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <Typography variant='h4' style={{ fontWeight: 'bold', textAlign: 'center' }}>
                ADD ACCESSORIES
            </Typography>
            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    value={name}
                    onChange={changeHandler}
                    sx={{ width: '30%', marginTop: '15px' }}
                    id="outlined-basic"
                    name="name"
                    label="NAME OF ACCESSORIES"
                    placeholder='NAME OF ACCESSORIES'
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
            </Grid>
        </div>
    );
}

export default Addaccessories;
