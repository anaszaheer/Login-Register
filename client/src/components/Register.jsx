import React, { useState } from 'react'
import { Button, Typography, TextField, Box, Paper, Avatar } from '@mui/material';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Register() {
    //styles
    const paperStyle = { padding: 60, borderRadius: 8 }
    const avatarStyle = { background: '#000000' }

    //api url
    const url = 'http://localhost:9000/register'

    //states
    const [userdetails, setUserDetails] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    //event handlers
    const changeHandler = (e) => {

        const { name, value } = e.target

        setUserDetails({
            ...userdetails,
            [name]: value
        })

    }
    const submitHandler = (e) => {

        e.preventDefault();
        
        const { username, password, confirmPassword } = userdetails;

        if (username && password && confirmPassword && (password === confirmPassword)) {
            axios.post(url, userdetails)
                .then((res) => {
                    alert(res.data);
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            alert('Invalid, try again.')
        }
    }

    return (
        <>
            <Box component="div">

                <Paper className='paper-content' elevation={22} style={paperStyle}>

                    <Avatar style={avatarStyle}><DoNotTouchIcon /></Avatar>

                    <Typography variant="h6" >Register Page</Typography>

                    <form onSubmit={submitHandler} className="form-content">

                        <TextField
                            placeholder="Username"
                            name='username' value={userdetails.username}
                            onChange={changeHandler}
                            helperText="This is to add username"
                            label="Enter username here"
                        />

                        <TextField
                            placeholder="Password"
                            name='password'
                            value={userdetails.password}
                            onChange={changeHandler}
                            helperText="This is to add password"
                            label="Enter password here"
                        />

                        <TextField
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            value={userdetails.confirmPassword}
                            onChange={changeHandler}
                            helperText="This is to confirm password"
                            label="Enter confirm password"
                        />

                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth>Register
                        </Button>

                        <Button
                            component={Link}
                            to='/login'
                            color="secondary"
                            variant='contained'
                            fullWidth>Goto Login Page
                        </Button>

                    </form>

                </ Paper>

            </ Box>
        </>
    )
}

export default Register