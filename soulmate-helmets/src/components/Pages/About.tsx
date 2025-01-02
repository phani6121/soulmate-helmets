import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer';
import { Typography, Grid, Box } from '@mui/material';

const About: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div style={{ marginTop: '150px', backgroundColor: "#FFFAFA", textAlign: "center", color: "black" }}>

            {/* OUR STORY Section */}
            <Box style={{ backgroundColor: '#f0f0f0', padding: '40px 20px', marginBottom: '30px', borderRadius: '8px' }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            OUR STORY
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Soulmate Auto Accessories Pvt. Ltd is headquartered in Belgaum, India and was incorporated in 1982 as the pilot entity of the Soulmate Group of Companies. Under the able stewardship of the Chandak's, Soulmate has powered its way to become one of the leading helmet manufacturers in India, competing with the world leaders concerning design, process, and product quality.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Soulmate's dedicated team and their continuous quest for innovation enabled the brand to be synonymous with quality. ‘Quality above Quantity’ has always been the motto in every stage of development at Soulmate. The quality features have been further reinforced with our advent into fiberglass and carbon fiber technology, which in turn has augmented our sales to great heights in the past two decades.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src="./story.jpg" // Replace with the actual image URL
                            alt="Our Story"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box style={{ backgroundColor: '#e0e0e0', padding: '40px 20px', marginBottom: '30px', borderRadius: '8px' }}>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                            OUR EXPERTISE
                        </Typography>
                        <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
                            ‘Quality above Quantity’ has always been our motto. Our expertise is cultivated and nurtured over time between the customer, product, and organization. Our products are the perfect amalgamation of style, design, innovation, safety, and comfort.
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center" style={{margin:"0 10px"}}>
                        <Grid item xs={6} md={3}>
                            <img
                                src="/experience1.jpg" // Replace with the actual image URL
                                alt="Our Expertise"
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    height: 'auto',
                                    marginBottom: '16px', // Gap between images
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img
                                src="/experience2.jpg" // Replace with the actual image URL
                                alt="Our Expertise"
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    height: 'auto',
                                    marginBottom: '16px', // Gap between images
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img
                                src="/experience3.jpg" // Replace with the actual image URL
                                alt="Our Expertise"
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    height: 'auto',
                                    marginBottom: '16px', // Gap between images
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img
                                src="/experience4.jpg" // Replace with the actual image URL
                                alt="Our Expertise"
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    height: 'auto',
                                    marginBottom: '16px', // Gap between images
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            {/* MISSION Section */}
            <Box style={{ backgroundColor: '#f0f0f0', padding: '40px 20px', marginBottom: '30px', borderRadius: '8px' }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            MISSION
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Soulmate envisions empowering every biker with the best and safest riding gear. We aim to build products that serve the purpose and become the consumer’s first choice. Our objective is to be the global leader and explore the new frontiers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src="/mission.jpg" // Replace with the actual image URL
                            alt="Mission"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box
                style={{
                    backgroundImage: 'url("/vision1.jpg")', // Replace with your actual image URL
                    backgroundSize: 'cover', // Ensures the background image fully covers the box
                    backgroundPosition: 'center', // Keeps the background image centered
                    padding: '40px 20px',
                    marginBottom: '30px',
                    borderRadius: '8px',
                    height: '300px', // You can adjust this height as needed
                }}
            >
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    style={{  height: '100%' }}
                >
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div>
                            <Typography variant="h4" gutterBottom>
                                VISION
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our vision is to blend futuristic design and technology to create premium quality helmets and provide excellent customer experiences while having a positive impact on the ecosystem and society.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Soulmate has a wide network of over 400 dealers across the country and has also established itself overseas in countries like the USA, Germany, Italy, Angola, Nepal, Thailand, Sri Lanka, Bangladesh, and UAE.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </div>
    );
}

export default About;
