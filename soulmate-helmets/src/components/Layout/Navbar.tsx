import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs } from "@mui/material";

const Navbar: React.FC = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setValue(0);
        } else if (path === '/helmets') {
            setValue(1);
        } else if (path === '/accessories') {
            setValue(2);
        } else if (path === '/about') {
            setValue(3);
        } else if (path === '/warranty') {
            setValue(4);
        } else if (path === '/contact') {
            setValue(5);
        }
    }, [location.pathname]);

    const isHelmetsPage = location.pathname === '/helmets';
    const isAccessoriesPage = location.pathname === '/accessories';

    return (
        <AppBar style={{backgroundColor:"white"}} >
            <Toolbar id="back-to-top-anchor">
                {/* Wrap logo in a Link to navigate to the dashboard */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src="/logo image4.png" alt="Logo" style={{ height: '100px', marginRight: '15px' }} />
                </Link>

                <Tabs
                    sx={{ marginRight: "auto", marginLeft: "40px",color:"black" }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                >
                    <Tab
                        label="DashBoard"
                        component={Link}
                        to="/"
                        sx={{
                            '&:hover': {
                                color: 'orange',
                                 fontSize: "15px"
                            },
                        }}
                    />
                    <Tab
                        label="Helmets"
                        component={Link}
                        to="/helmets"
                        sx={{
                            '&:hover': {
                                color: 'orange',
                                fontSize: "15px"
                            },
                        }}
                    />
                    <Tab
                        label="Accessories"
                        component={Link}
                        to="/accessories"
                        sx={{
                            '&:hover': {
                                color: 'orange',
                                fontSize: "15px"
                            },
                        }}
                    />
                    <Tab
                        label="About Us"
                        component={Link}
                        to="/about"
                        sx={{
                            '&:hover': {
                                color: 'orange',
                                fontSize: "15px"
                            },
                        }}
                    />
                    <Tab
                        label="Warranty"
                        component={Link}
                        to="/warranty"
                        sx={{
                            '&:hover': {
                                color: 'orange',
                                fontSize: "15px"
                            },
                        }}
                    />
                    <Tab
                        label="Contact-Us"
                        component={Link}
                        to="/contact"
                        sx={{
                            '&:hover': {
                                color: 'orange',
                                fontSize: "15px"
                            },
                        }}
                    />
                </Tabs>

                {isHelmetsPage && (
                    <Button
                        sx={{
                            background: "rgba(0,0,0,0.5)",
                            '&:hover': {
                                backgroundColor: 'orange',
                            },
                        }}
                        onClick={() => { navigate("/addhelmets"); }}
                        style={{ marginRight: "15px" }}
                        variant="contained"
                    >
                        ADD HELMET
                    </Button>
                )}
                {isAccessoriesPage && (
                    <Button
                        sx={{
                            background: "rgba(0,0,0,0.5)",
                            '&:hover': {
                                backgroundColor: 'orange',
                            },
                        }}
                        onClick={() => { navigate("/addaccessories"); }}
                        style={{ marginRight: "15px" }}
                        variant="contained"
                    >
                        ADD ACCESSORIES
                    </Button>
                )}
                <Button
                    sx={{
                        background: "rgba(0,0,0,0.5)",
                        '&:hover': {
                            backgroundColor: 'orange',
                        },
                    }}
                    onClick={() => { navigate("/login"); }}
                    variant="contained"
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
