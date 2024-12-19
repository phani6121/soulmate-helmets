import React, { useEffect } from "react";
import { Grid, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from 'react-router-dom';

// Footer component
const Footer: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <div style={{ textAlign: "center", fontFamily: 'inherit', backgroundColor: "#FAF0E6", height: "50vh" }} >
                <Grid style={{ display: "flex", justifyContent: "space-evenly", color: "black" }}>
                    <Grid style={{ marginBottom: "50px" }}>
                        <Typography variant="h4" sx={{ margin: "15px" }}>
                            Product
                        </Typography>
                        <Typography onClick={() => { navigate("/helmets") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                            Helmets
                        </Typography>
                        <Typography onClick={() => { navigate("/accessories") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                            Accessories
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h4" sx={{ margin: "15px" }}>
                            Service
                        </Typography>
                        <Typography component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                            Helmets Repair
                        </Typography>
                        <Typography component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                            Accessories Installation
                        </Typography>
                        <Typography component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                            Bike Modification
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h4" sx={{ margin: "15px" }}>
                            About
                        </Typography>
                        <div>
                            <Typography onClick={() => { navigate("/about") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                                About Us
                            </Typography>
                            <Typography onClick={() => { navigate("/contact") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                                Contact Us
                            </Typography>
                            <Typography onClick={() => { navigate("/warranty") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "black", textDecoration: "none", cursor: "pointer" }}>
                                Warranty
                            </Typography>
                        </div>
                    </Grid>
                </Grid>

                {/* Social Media Icons */}
                <Grid>
                    <IconButton sx={{ color: "black" }} aria-label="Facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "black" }} aria-label="Twitter">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton sx={{ color: "black" }} aria-label="Instagram">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "black" }} aria-label="YouTube">
                        <YouTubeIcon />
                    </IconButton>
                </Grid>

                {/* Copyright Section */}
                <div style={{ marginTop: "30px", backgroundColor: "#AFEEEE", width: "100%", height: "60px", textAlign: "center", paddingTop: "30px" }}>
                    <Typography variant="body1" color="black">
                        © Your Website 2023. All Rights Reserved.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Footer;
