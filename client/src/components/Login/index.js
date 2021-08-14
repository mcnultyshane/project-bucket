import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'
import Auth from "../../utils/auth"
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';


export default function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    const paperStyle={padding: '30px 20px', width:300, margin:'20px auto'}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#77D47D'}
    const submitStyle={backgroundColor: '#77D47D', marginTop:10}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                </Avatar>
                <h2 style={headerStyle}>Login</h2>
                <Typography variant='caption'>Please fill out this form to login</Typography>
                </Grid>
                <form onSubmit={handleFormSubmit} >
                    <TextField onChange={handleChange} name='email' type='email' fullWidth label='Email'/>
                    <TextField onChange={handleChange} name='password' type='password' fullWidth label='Password'/>
                    <Button id='loginSubmit' align='center' type='submit' variant='contained' style={submitStyle} >Login</Button>
                </form>
            </Paper>
        </Grid>
    )
};

