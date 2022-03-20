import React, { useState } from 'react'
import { Typography, Button, TextField, Box, Paper, Avatar } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"

function Login({ setUser }) {

    //history
    const navigate = useNavigate()

    //styles
    const paperStyle = { padding: 60, borderRadius: 8 }
    const avatarStyle = { background: '#000000' }

    //api url
    const url = 'http://localhost:9000/login'

    //states
    const [userdetails, setUserDetails] = useState({
        username: "",
        password: ""
    });

    //event handler
    const changeHandler = (e) => {
        const { name, value } = e.target

        setUserDetails({
            ...userdetails,
            [name]: value
        })
    }
    const loginHandler = (e) => {
        e.preventDefault()
        axios.post(url, userdetails)
            .then((res) => {
                alert(res.data.message);
                setUser(res.data.user);
                navigate('/')
            })
            .catch((err) => { alert(err.message) })
    }

    return (
        <>
            <Box component="div" >

                <Paper elevation={22} style={paperStyle} className="paper-content">

                    <Avatar
                        style={avatarStyle}><VpnKeyIcon /></Avatar>

                    <Typography variant="h6">Login Page</Typography>

                    <form onSubmit={loginHandler} className="form-content">

                        <TextField
                            placeholder="Enter username"
                            required
                            name="username"
                            onChange={changeHandler}
                            value={userdetails.username}
                            helperText="This area is to enter your name"
                            label="Username"
                        />

                        <TextField
                            type="password"
                            placeholder="Enter password"
                            required name="password"
                            onChange={changeHandler}
                            value={userdetails.password}
                            label="Password"
                            helperText="This is where to add username"
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth>Login
                        </Button>

                        <Button
                            component={Link}
                            to='/register'
                            variant="contained"
                            color="secondary"
                            fullWidth>Goto Register Page
                        </Button>

                    </form>

                </Paper>

            </Box>
        </>
    )
}

export default Login