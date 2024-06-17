import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardActions, CardContent, CardMedia, Button, CircularProgress } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../Layout/Footer';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Accessories: React.FC = () => {
    const navigate = useNavigate();
    const [accessories, setAccessories] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(4); // Number of items to display per page

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    });

    //Performing data fetching directly in the component body can cause issues, such as fetching data on every render or causing infinite loops.

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await fetch('http://localhost:8000/accessories');
                if (response.ok) {
                    const data = await response.json();
                    setAccessories(data);
                } else {
                    throw new Error('Failed to fetch helmets');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Once data fetching completes (whether success or error), setLoading(false)
            }
        };
        fetchAccessories();
    }, []);

    const deleteAccessories = async (id: string, index: number) => {
        try {
            const response = await fetch(`http://localhost:8000/accessories/${encodeURIComponent(id)}`, {
                method: 'DELETE',
            });
            // If the DELETE request is successful, the function creates a copy of the helmets array using the spread operator [...helmets] to avoid mutating state directly.It then uses the splice method to remove the helmet at the specified index from the copied array.Finally, it updates the state with the modified array using the setHelmets function.
            if (response.ok) {
                const updatedAccessories = [...accessories];
                updatedAccessories.splice(index, 1);
                setAccessories(updatedAccessories);
            } else {
                throw new Error('Failed to delete Accessories');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = accessories.slice(indexOfFirstItem, indexOfLastItem);

    if (loading) {
        return <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />;
    }

    return (
        <div style={{ backgroundColor: "#0a5eb9", padding: '20px' }}>
            <Typography variant="h3" style={{ textAlign: 'center', fontFamily: 'inherit', marginBottom: '20px' }}>
                PRODUCTS
            </Typography>
            <Grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '21px', marginBottom: "40px", alignItems: "center" }}>
                {currentItems.map((accessories, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                sx={{ height: 240 }}
                                image={accessories.image}
                                alt='accessoriesImage'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center" >
                                    {accessories.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    <CurrencyRupeeIcon style={{ fontSize: '17px', verticalAlign: 'middle' }} />
                                    <span style={{ fontSize: '21px', verticalAlign: 'middle' }}>{accessories.price}</span>
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button onClick={() => navigate("/purchase")} variant="contained" size="small">BUY NOW</Button>
                                <Button onClick={() => deleteAccessories(accessories.id, indexOfFirstItem + index)} variant="contained" size="small">DELETE</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Stack spacing={2} justifyContent="center" alignItems="center" style={{ marginBottom: '20px' }}>
                <Pagination
                    count={Math.ceil(accessories.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
            <Footer />
        </div>
    );
}

export default Accessories;

