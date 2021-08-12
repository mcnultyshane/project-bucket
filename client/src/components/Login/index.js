import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';


export const Login=()=>{
    const paperStyle={padding: '30px 20px', width:300, margin:'20px auto'}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#77D47D'}
    const submitStyle={backgroundColor: '#77D47D'}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                </Avatar>
                <h2 style={headerStyle}>Login</h2>
                <Typography variant='caption'>Please fill out this form to login</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Email'/>
                    <TextField fullWidth label='Password'/>
                    <Button align='center' type='submit' variant='contained' style={submitStyle} >Login</Button>
                </form>
            </Paper>
        </Grid>
    )
};

