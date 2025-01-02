import React, { useEffect } from "react";
import { Grid, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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

    // Handle hover effect on text links
    const handleHover = (e: React.MouseEvent<HTMLElement>, color: string) => {
        e.currentTarget.style.color = color;
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#FAF0E6",borderRadius:"15px" }}>
            {/* Navigation Links */}
            <Grid container justifyContent="center" style={{ marginBottom: "30px" }}>
                <Grid item xs={12} md={6}>
                    <ul style={{ display: "flex", justifyContent: "space-evenly", listStyleType: "none", borderBottom: "2px solid orange", paddingBottom: "20px", width: "100%" }}>
                        <li>
                            <Link href="/about"
                                style={{ textDecoration: "none", fontSize: "20px", color: "#000", transition: "color 0.3s", marginRight:"40px" }}
                                onMouseOver={(e) => handleHover(e, "orange")}
                                onMouseOut={(e) => handleHover(e, "#000")}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                style={{ textDecoration: "none", fontSize: "20px", color: "#000", transition: "color 0.3s", marginRight: "40px" }}
                                onMouseOver={(e) => handleHover(e, "orange")}
                                onMouseOut={(e) => handleHover(e, "#000")}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/helmets"
                                style={{ textDecoration: "none", fontSize: "20px", color: "#000", transition: "color 0.3s", marginRight: "40px" }}
                                onMouseOver={(e) => handleHover(e, "orange")}
                                onMouseOut={(e) => handleHover(e, "#000")}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/warranty"
                                style={{ textDecoration: "none", fontSize: "20px", color: "#000", transition: "color 0.3s" }}
                                onMouseOver={(e) => handleHover(e, "orange")}
                                onMouseOut={(e) => handleHover(e, "#000")}>
                                Warranty
                            </Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>

            {/* Tagline */}
            <Typography variant="h4" style={{ letterSpacing: "2px", fontSize: "30px", padding: "0 150px" }}>
                TASTE THE SPEED WITH SAFETY
            </Typography>

            {/* Social Media Icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", margin: "30px 0" }}>
                <IconButton style={{ color: "#0093DD", transition: "color 0.3s" }}
                    onMouseOver={(e) => handleHover(e, "orange")}
                    onMouseOut={(e) => handleHover(e, "#0093DD")}>
                    <FacebookIcon />
                </IconButton>
                <IconButton style={{ color: "#0093DD", transition: "color 0.3s" }}
                    onMouseOver={(e) => handleHover(e, "orange")}
                    onMouseOut={(e) => handleHover(e, "#0093DD")}>
                    <TwitterIcon />
                </IconButton>
                <IconButton style={{ color: "#0093DD", transition: "color 0.3s" }}
                    onMouseOver={(e) => handleHover(e, "orange")}
                    onMouseOut={(e) => handleHover(e, "#0093DD")}>
                    <InstagramIcon />
                </IconButton>
                <IconButton style={{ color: "#0093DD", transition: "color 0.3s" }}
                    onMouseOver={(e) => handleHover(e, "orange")}
                    onMouseOut={(e) => handleHover(e, "#0093DD")}>
                    <GoogleIcon />
                </IconButton>
                <IconButton style={{ color: "#0093DD", transition: "color 0.3s" }}
                    onMouseOver={(e) => handleHover(e, "orange")}
                    onMouseOut={(e) => handleHover(e, "#0093DD")}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton style={{ color: "#0093DD", transition: "color 0.3s" }}
                    onMouseOver={(e) => handleHover(e, "orange")}
                    onMouseOut={(e) => handleHover(e, "#0093DD")}>
                    <GitHubIcon />
                </IconButton>
            </div>

            {/* Footer Bottom */}
            <div style={{ marginTop: "30px", backgroundColor: "#4169E1", width: "100%", padding: "10px 0" }}>
                <Typography variant="body2" style={{ color: "#fff" }}>
                    © Your Website 2023. All Rights Reserved.
                </Typography>
            </div>
        </div>
    );
};

export default Footer;
