// Import necessary components from Material-UI
import React, { useEffect } from "react";
import { Grid, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from 'react-router-dom';

// Footer component
const Footer: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    })
    return (
        <div>
            <div style={{ textAlign: "center", fontFamily: 'inherit', backgroundColor: "#0952a0", borderRadius: "15px" }} >
                <Grid style={{ display: "flex", justifyContent: "space-evenly", color: "white" }}>
                    <Grid >
                        <Typography variant="h4" sx={{ margin: "15px" }}>
                            Product
                        </Typography>
                        {/* Add your product items here */}
                        <Typography onClick={() => { navigate("/helmets") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                            Helmets
                        </Typography>
                        <Typography onClick={() => { navigate("/accessories") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                            Accessories
                        </Typography>

                    </Grid>
                    <Grid>
                        <Typography variant="h4" sx={{ margin: "15px" }}>
                            Service
                        </Typography>
                        {/* Add your service items here */}
                        <Typography component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                            Helmets Repair
                        </Typography>
                        <Typography component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                            Accessories Installation
                        </Typography>
                        <Typography component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                            Bike Modification
                        </Typography>

                    </Grid>
                    <Grid >
                        <Typography variant="h4" sx={{ margin: "15px" }}>
                            About
                        </Typography>
                        <div>
                            <Typography onClick={() => { navigate("/about") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                                About Us
                            </Typography>
                            <Typography onClick={() => { navigate("/helmets") }} component={Link} variant="h6" sx={{ display: 'block', margin: "15px", color: "white", textDecoration: "none", cursor: "pointer" }}>
                                Contact Us
                            </Typography>
                        </div>

                    </Grid>


                </Grid>
                <Grid >
                    <IconButton sx={{ color: "white" }} aria-label="Facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} aria-label="Twitter">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} aria-label="Instagram">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} aria-label="YouTube">
                        <YouTubeIcon />
                    </IconButton>
                </Grid>

            </div>
        </div >
    );
};

export default Footer;
