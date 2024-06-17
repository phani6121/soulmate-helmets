import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer';



import { Typography, Grid } from '@mui/material';

const About: React.FC = () => {

    const navigate = useNavigate()

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    });
    return (
        <div style={{ marginTop: '50px', backgroundColor: "#0a5eb9", textAlign: "center", color: "white" }}>
            <Grid style={{ padding: "0px 220px" }}>
                <Typography variant="h4" gutterBottom>
                    OUR STORY
                </Typography>
                <Typography variant="body1" paragraph>
                    Vega Auto Accessories Pvt. Ltd is headquartered in Belgaum, India was incorporated in 1982 as the pilot entity of the Vega Group of Companies. Under the able stewardship of the Chandak’s, Vega has powered its way to become one of the leading helmet manufacturers in India, competing with the world leaders concerning design, process, and product quality.
                </Typography>
                <Typography variant="body1" paragraph>
                    Vega’s dedicated team and their continuous quest for innovation enabled the brand to be synonymous with quality. ‘Quality above Quantity’ has always been the motto in every stage of development at Vega. The quality features have been further reinforced with our advent into fiberglass and carbon fiber technology, which in turn has augmented our sales to great heights in the past two decades. We have enhanced our strong design and developmental capabilities backed by 4 well-equipped manufacturing setups in India, all equipped with in-house design, machining, fabrication, assembly, and testing facilities.
                </Typography>
                <Typography variant="body1" paragraph>
                    The company’s ideology of Safety coupled with Fashion has become a pioneer in promoting helmets as ‘Designer Head Gear’. Vega’s vast range has been approved by the Bureau of Indian Standards IS-4151 (for motorcycle helmets), DOT and ECE.
                </Typography>

                <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
                    OUR EXPERTISE
                </Typography>
                <Typography variant="body1" paragraph>
                    ‘Quality above Quantity’ has always been our motto. Our expertise is cultivated and nurtured over time between the customer, product, and organization. Our products are the perfect amalgamation of style, design, innovation, safety, and comfort.
                </Typography>

                <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
                    MISSION
                </Typography>
                <Typography variant="body1" paragraph>
                    Vega envisions empowering every biker with the best and safest riding gear. We aim to build products that serve the purpose and become the consumer’s first choice. Our objective is to be the global leader and explore the new frontiers.
                </Typography>

                <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
                    VISION
                </Typography>
                <Typography variant="body1" paragraph>
                    Our vision is to blend futuristic design and technology to create premium quality helmets and provide excellent customer experiences while having a positive impact on the ecosystem and society.
                </Typography>

                <Typography variant="body1" paragraph>
                    Vega has a wide network of over 400 dealers across the country and has also established itself overseas in countries like the USA, Germany, Italy, Angola, Nepal, Thailand, Sri Lanka, Bangladesh, and UAE.
                </Typography>
            </Grid>
            <Footer />
        </div>
    );
}

export default About
