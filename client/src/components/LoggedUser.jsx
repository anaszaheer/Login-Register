import React from 'react'
import { Typography, Paper } from '@mui/material';

function LoggedUser({ user }) {

    //style
    const paperStyle = { padding: 60, borderRadius: 8 }

    if(user.username){
    return (
        <div className='paper-content'>
            <Paper elevation={22} style={paperStyle} className="paper-content">
                <Typography variant="h5">Loged In User Details</Typography>
                <Typography variant="h6">Username: {user.username}</Typography>
                <Typography variant="h7">Note: Refresh page to logout</Typography>
            </Paper>
        </div>
    )
    }else{
        return (
            <div className='paper-content'>
                <Paper elevation={22} style={paperStyle} className="paper-content">
                    <Typography variant="h5">No Loged In User</Typography>
                </Paper>
            </div>
        )
    }
}

export default LoggedUser