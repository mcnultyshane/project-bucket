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
                    <TextField id='signupFirst' fullWidth label='First Name'/>
                    <TextField id='signupLast' fullWidth label='Last Name'/>
                    <TextField id='signupUser' fullWidth label='Username'/>
                    <TextField id='signupEmail' fullWidth label='Email'/>
                    <TextField id='signupPass' fullWidth label='Password'/>
                    <TextField id='signupConfPass' fullWidth label='Confirm Password'/>
                    <Button id='signupSubmit' align='center' type='submit' variant='contained' style={submitStyle} >Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

