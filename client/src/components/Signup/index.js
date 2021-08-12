import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export const Signup=()=>{
    const paperStyle={padding: '30px 20px', width:300, margin:'20px auto'}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#77D47D'}
    const submitStyle={backgroundColor: '#77D47D'}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    {/* <AddCircleOutlineOutlinedIcon /> */}
                </Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption'>Please fill out this form to create an account</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='First Name'/>
                    <TextField fullWidth label='Last Name'/>
                    <TextField fullWidth label='Username'/>
                    <TextField fullWidth label='Email'/>
                    <TextField fullWidth label='Password'/>
                    <TextField fullWidth label='Confirm Password'/>
                    <Button align='center' type='submit' variant='contained' style={submitStyle} >Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

