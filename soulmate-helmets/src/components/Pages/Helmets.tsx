import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardActions, CardContent, CardMedia, Button, CircularProgress } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../Layout/Footer';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Helmets: React.FC = () => {
    const navigate = useNavigate();
    const [helmets, setHelmets] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(4); // Number of items to display per page

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchHelmets = async () => {
            try {
                const response = await fetch('http://localhost:8000/helmets');
                if (response.ok) {
                    const data = await response.json();
                    setHelmets(data);
                } else {
                    throw new Error('Failed to fetch helmets');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Once data fetching completes (whether success or error), setLoading(false)
            }
        };
        fetchHelmets();
    }, []);

    const deleteHelmet = async (id: string, index: number) => {
        try {
            //encodeURIComponent(id) ensures that any special characters or spaces in id are properly encoded for use in a URL. This is necessary to handle values like Off Road D/V Thunder Dull Black Green which would be encoded as Off%20Road%20D/V%20Thunder%20Dull%20Black%20Green.
            const response = await fetch(`http://localhost:8000/helmets/${encodeURIComponent(id)}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const updatedHelmets = [...helmets];
                updatedHelmets.splice(index, 1);
                setHelmets(updatedHelmets);

                const numPages = Math.ceil(updatedHelmets.length / itemsPerPage);
                if (currentPage > numPages) {
                    setCurrentPage(numPages);
                }
            }
            else {
                throw new Error('Failed to delete helmet');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    //     Example Scenario
    // Let's illustrate with an example:

    // Suppose helmets is an array of 12 items.
    // itemsPerPage is set to 4.
    //     Initially, currentPage is set to 1.
    // Initial Calculation:
    //     indexOfLastItem: currentPage(1) * itemsPerPage(4) = 4

    // This means the last item index to display is the 4th item.
    //         indexOfFirstItem: indexOfLastItem(4) - itemsPerPage(4) = 0

    // This means the first item index to display is the 0th item.
    // Resulting Slice:
    //     currentItems: helmets.slice(0, 4)
    // This slice extracts items from index 0(inclusive) to 4(exclusive) from the helmets array.
    //         So, currentItems now contains the first 4 items from the helmets array.

    const indexOfLastItem = currentPage * itemsPerPage; //8 if page is 2
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; //8-4 = 4
    const currentItems = helmets.slice(indexOfFirstItem, indexOfLastItem); //

    if (loading) {
        return <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />;
    }

    return (
        <div style={{ backgroundColor: "#0a5eb9", padding: '20px' }}>
            <Typography variant="h3" style={{ textAlign: 'center', fontFamily: 'inherit', marginBottom: '20px' }}>
                PRODUCTS
            </Typography>
            <Grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '21px', marginBottom: "20px", alignItems: "center" }}>
                {currentItems.map((helmet, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card sx={{ Width: 345, height: 480 }}>
                            <CardMedia
                                component="img"
                                height="280"
                                image={helmet.image}
                                alt="helmetImage"
                            />
                            {/* <img src="/helmet1.jpg" alt="" /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                    {helmet.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    <CurrencyRupeeIcon style={{ fontSize: '17px', verticalAlign: 'middle' }} />
                                    <span style={{ fontSize: '21px', verticalAlign: 'middle' }}>{helmet.price}</span>
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button onClick={() => navigate("/purchase")} variant="contained" size="small">BUY NOW</Button>
                                <Button onClick={() => deleteHelmet(helmet.id, indexOfFirstItem + index)} variant="contained" size="small">DELETE</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Stack spacing={2} justifyContent="center" alignItems="center" style={{ marginBottom: '20px' }}>
                <Pagination
                    //     Example Scenario:If helmets.length is 12 and itemsPerPage is 4:

                    // count will be Math.ceil(12 / 4), which is 3. This means there are 3 pages in total.
                    // page={currentPage} indicates which page is currently active based on the currentPage state variable.
                    // onChange={handlePageChange} ensures that when a user clicks on a different page number, handlePageChange updates currentPage to reflect the new page.
                    // The pagination controls will adjust automatically based on these props, providing a smooth navigation experience through your paginated data.
                    count={Math.ceil(helmets.length / itemsPerPage)}
                    //The Math.ceil() function in JavaScript is used to round a number up to the nearest integer, regardless of the decimal part
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
            <Footer />
        </div>
    );
}

export default Helmets;
