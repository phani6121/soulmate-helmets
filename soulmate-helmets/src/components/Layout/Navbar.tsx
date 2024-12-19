import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs, Typography } from "@mui/material";

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

    // When the location pathname changes, update the selected tab
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
        <AppBar sx={{ background: "#87CEFA" }}>
            <Toolbar id="back-to-top-anchor">
                {/* Logo from the public folder */}
                <img src="/logo image1.jpg" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />

                <Typography color={"goldenrod"} variant='h6'>
                    HELMETS
                </Typography>

                <Tabs
                    sx={{ marginRight: "auto", marginLeft: "40px",color:"black" }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                >
                    <Tab label="DashBoard" component={Link} to="/" />
                    <Tab label="Helmets" component={Link} to="/helmets" />
                    <Tab label="Accessories" component={Link} to="/accessories" />
                    <Tab label="About Us" component={Link} to="/about" />
                    <Tab label="Warranty" component={Link} to="/warranty" />
                    <Tab label="Contact-Us" component={Link} to="/contact" />
                </Tabs>
                {isHelmetsPage && (
                    <Button onClick={() => { navigate("/addhelmets"); }} style={{ marginRight: "15px" }} variant="contained">
                        ADD HELMET
                    </Button>
                )}
                {isAccessoriesPage && (
                    <Button onClick={() => { navigate("/addaccessories"); }} style={{ marginRight: "15px" }} variant="contained">
                        ADD ACCESSORIES
                    </Button>
                )}
                <Button onClick={() => { navigate("/login"); }} variant="contained">
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
