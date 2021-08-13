import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';


export const Login=()=>{
    const paperStyle={padding: '30px 20px', width:300, margin:'20px auto'}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#77D47D'}
    const submitStyle={backgroundColor: '#77D47D'}
    function handleSubmit(e) {
        e.preventDefualt()
        alert('Thank you for submitting the form')
    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                </Avatar>
                <h2 style={headerStyle}>Login</h2>
                <Typography variant='caption'>Please fill out this form to login</Typography>
                </Grid>
                <form onSubmit={handleSubmit} >
                    <TextField id='loginEmail' fullWidth label='Email'/>
                    <TextField id='loginPassword' fullWidth label='Password'/>
                    <Button id='loginSubmit' align='center' type='submit' variant='contained' style={submitStyle} >Login</Button>
                </form>
            </Paper>
        </Grid>
    )
};

