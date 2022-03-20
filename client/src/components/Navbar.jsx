import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { Box, AppBar, List, ListItem, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoggedUser from './LoggedUser'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    //states
    const [user, setLoginUser] = useState()
    const [anchorEl, setAnchorEl] = useState(null);
    
    //event handlers
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <BrowserRouter>

                <Div>

                    <AppBar className="navbar navbar-expand-lg navbar-dark bg-dark">

                        <Box component='div' className="container-fluid">
                            <Typography component="a" className="navbar-brand" target="blank" style={{ flexGrow: 24 }} href="/login">Free Time App</Typography>

                            <IconButton
                                className="menu-icon"
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Box className="collapse navbar-collapse collapse" id="navbarSupportedContent">
                                <List className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <ListItem className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">Login</a>
                                    </ListItem>
                                    <ListItem className="nav-item">
                                        <a className="nav-link" href="/register">Register</a>
                                    </ListItem>
                                </List>
                            </Box>

                        </Box>
                    </AppBar>
                </Div>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to='/login' onClick={handleClose}>Login</MenuItem>
                    <MenuItem component={Link} to='/register' onClick={handleClose}>Register</MenuItem>
                </Menu>

                <Routes>
                    <Route path='/' element={(user && user._id) ? <LoggedUser user={user} /> : <Login setUser={setLoginUser} />} />
                    <Route path='/login' element={<Login setUser={setLoginUser} />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
const Div = styled.div`
.menu-icon{
    display:none;
}
    @media (max-width:998px) {
        .menu-icon{
            display:block;
        }
    }
`

export default Navbar