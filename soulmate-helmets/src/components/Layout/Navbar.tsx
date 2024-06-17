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
    });

    //when i click button some other page to helmets or accessories page that style indicates dashboard but use shows correct so i can use useEffect
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
        }
    }, [location.pathname]);

    const isHelmetsPage = location.pathname === '/helmets';
    const isAccessoriesPage = location.pathname === '/accessories';

    return (
        <AppBar sx={{ background: "#0952a0" }}>
            <Toolbar id="back-to-top-anchor">
                <Typography color={"goldenrod"} variant='h6'>SOULMATE HELMETS</Typography>
                <Tabs
                    sx={{ marginRight: "auto", marginLeft: "100px" }}
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
