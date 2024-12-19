import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [totalCollection, setTotalCollection] = useState<number>(0);
    const [profit, setProfit] = useState<number>(0);
    const [eachPersonShare, setEachPersonShare] = useState<number>(0);
    const [persons] = useState<number>(4); // Assuming 4 persons share the profit
    const [helmets, setHelmets] = useState<any[]>([]); // State for helmets
    const [accessories, setAccessories] = useState<any[]>([]); // State for accessories
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchHelmets = async () => {
            try {
                const response = await fetch('http://localhost:8000/helmets');
                if (response.ok) {
                    const data = await response.json();
                    // Convert price strings with commas to numbers
                    const helmetsWithParsedPrices = data.map((helmet: any) => ({
                        ...helmet,
                        price: parseFloat(helmet.price.replace(/,/g, '')), // Remove commas and parse to float
                        //  helmet.price: Accesses the price property of the current helmet object.
                        // .replace(/,/g, ''): Uses a regular expression(/, /g) to globally (g flag) replace all commas (/ characters in the regular expression) with an empty string('').This removes commas from the price string.
                        // parseFloat(...): Converts the resulting string(after removing commas) into a floating - point number.This function parses a string argument and returns a floating - point number.

                        //parseFloat() parses a string and returns the first number
                    }));
                    setHelmets(helmetsWithParsedPrices);
                } else {
                    throw new Error('Failed to fetch helmets');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        const fetchAccessories = async () => {
            try {
                const response = await fetch('http://localhost:8000/accessories');
                if (response.ok) {
                    const data = await response.json();
                    // Convert price strings with commas to numbers
                    const accessoriesWithParsedPrices = data.map((accessory: any) => ({
                        ...accessory,
                        price: parseFloat(accessory.price.replace(/,/g, '')), // Remove commas and parse to float
                    }));
                    setAccessories(accessoriesWithParsedPrices);
                } else {
                    throw new Error('Failed to fetch accessories');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchHelmets();
        fetchAccessories();
    }, []);

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        // Calculate total collection from helmets and accessories
        const totalHelmetsPrice = helmets.reduce((acc, helmet) => acc + helmet.price, 0);
        // Uses reduce method to sum up all price values in the helmets array.
        // acc is the accumulator that starts from 0 and accumulates the sum of prices.
        // helmet.price accesses the price of each helmet object.
        // This calculates the total price of all helmets
        const totalAccessoriesPrice = accessories.reduce((acc, accessory) => acc + accessory.price, 0);
        const total = totalHelmetsPrice + totalAccessoriesPrice;
        setTotalCollection(total);

        // Calculate profit (assuming 39% of total collection)
        const calculatedProfit = (39 / 100) * total; // 39% of total collection
        setProfit(calculatedProfit);

        // Calculate each person's share
        const calculatedShare = calculatedProfit / persons;
        setEachPersonShare(calculatedShare);
    }, [helmets, accessories, persons]);

    if (loading) {
        return <Typography>Loading...</Typography>; // Show loading indicator while fetching data
    }

    return (
        <div>
            <Box
                sx={{
                    backgroundColor: "#FFFAFA",
                    color: "black",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh', // Ensure the content takes up the full height of the page
                    paddingBottom: '60px', // Ensure space for the footer
                }}
            >
                <Grid container spacing={2} sx={{ textAlign: 'center', maxWidth: 800 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>Accounts Information</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Total Collection:</strong> {totalCollection.toLocaleString()} Rupees
                            {/* toLocaleString(): This is a JavaScript method available on numbers (like totalCollection) that converts a number into a string using a locale-specific format. It adds commas as thousand separators and uses the appropriate decimal separator for the locale. For example, in India, it would format 1000000 as 10,00,000 */}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Profit:</strong> {profit.toLocaleString()} Rupees
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Persons:</strong> {persons}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Each Person Share:</strong> {eachPersonShare.toLocaleString()} Rupees
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
            <Footer />
        </div>
    );
};

export default Dashboard;


