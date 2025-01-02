import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


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
                    backgroundImage: 'url("/dashboard.jpg")',
                    backgroundSize: 'cover', // Ensures the background image covers the entire box
                    backgroundPosition: 'center',
                    color: "black",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                    minHeight: '100vh', // Ensure the content takes up the full height of the page
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
            <div style={{ display: "flex", justifyContent: "space-evenly", margin: "100px 0", textAlign: "center" }}>
                <div>
                    <BrandingWatermarkIcon style={{ fontSize: "60px", color: "#0093DD" }} />
                    <h1>Fully Responsible</h1>
                    <p style={{ fontSize: "20px" }}>The greatest day in your life. <br /> when you purchase my Products. <br /> From that day your life is my responsibility</p>
                </div>
                <div>

                    <WifiTetheringIcon style={{ fontSize: "60px", color: "#0093DD" }} />
                    <h1>Service Provided</h1>
                    <p style={{ fontSize: "20px" }}>The best customer service is if <br /> the customer doesn't need to call you, doesn't <br /> need to talk to you</p>
                </div>
                <div>

                    <WorkOutlineIcon style={{ fontSize: "60px", color: "#0093DD" }} />
                    <h1>Easy to Buy</h1>
                    <p style={{ fontSize: "20px" }}>Choose products and Buy Product simple <br /> We are always Think about Your Safety </p>
                </div>
            </div>
            <div style={{ display: "flex", height: "85vh" }}>
                <div style={{ textAlign: "center", padding: "150px 0px", margin: "0", backgroundColor: "#F8F8FF", width: "50%" }}>
                    <h1 style={{ fontSize: "40px" }}>Vega</h1>
                    <p style={{ padding: "0 120px" }}>
                        Established in 1982 in Belgaum, India, Vega Auto Accessories Pvt. Ltd stands as the pioneering entity of the Vega Group of Companies. Under the Chandak family’s adept leadership, Vega has ascended to the forefront of helmet manufacturing in India, competing with global leaders in design, process, and product quality.

                        Vega’s unwavering commitment to “Quality above Quantity” has been the driving force behind its journey, reinforced by continuous innovation and advancements in fibreglass and carbon fibre technology.</p>
                </div>
                <div style={{ width: "50%" }}>
                    <img src="\helmet1.jpg" alt="for design" style={{ height: "100vh", width: "100%", objectFit: "cover" }} />
                </div>
            </div>
            <div style={{ display: "flex", height: "85vh" }}>
                <div style={{ width: "50%" }}>
                    <img src="/studds2.webp" alt="for design" style={{ height: "100vh", width: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ textAlign: "center", padding: "150px 0px", margin: "0", backgroundColor: "#F8F8FF", width: "50%" }}>
                    <h1 style={{ fontSize: "40px" }}>Studds</h1>
                    <p style={{ padding: "0 120px" }}>Our story began in 1972. We have come a long way, from manufacturing our first helmet in a garage to manufacturing 14 million helmets every year.
                        In last 5 decades, we have continuously innovated ourselves so that we deliver on our promise of providing safety to a 2 wheeler rider.
                        We have received lots of love and affection from our customers worldwide and this has enabled us to be called as the world’s largest and best helmet making company.
                       </p>
                </div>

            </div>
            <div style={{ display: "flex", height: "85vh" }}>
                <div style={{ textAlign: "center", padding: "150px 0px", margin: "0", backgroundColor: "#F8F8FF", width: "50%" }}>
                    <h1 style={{ fontSize: "40px" }}>SteelBird</h1>
                    <p style={{ padding: "0 120px" }}>With global domination of more than 50 years and the inspiration to protect bike lovers and adventure enthusiasts all over the world, Steelbird Hi-Tech India Ltd. (SBHT) was founded on 13th March 1964. SBHT, a flagship company of Steelbird Group of Industries, ventured into the unknown territory of auto accessory business to manufacture helmets.</p>
                </div>
                <div style={{ width: "50%" }}>
                    <img src="/steelbird1.webp" alt="for design" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div>
            </div>
            <div>
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <h1>What people are saying...</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", margin: "50px 0" }}>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                borderRadius: "50%"
                            }}
                            src="/nagaraj.jpg"
                            alt="business"
                        />
                        <h1>Nagaraju A.</h1>
                        <p>"This is fantastic! Thanks so much guys!"</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                borderRadius: "50%"
                            }}
                            src="/praveen.jpg"
                            alt="business"
                        />
                        <h1>Praveen N.</h1>
                        <p>"soulmate helmets is amazing. I've been using it <br /> to create lots of super nice landing <br /> products."</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                borderRadius: "50%"
                            }}
                            src="/phani.jpg"
                            alt="business"
                        />
                        <h1>Phanindra N.</h1>
                        <p>"Thanks so much for making these free <br /> resources available to us!"</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default Dashboard;