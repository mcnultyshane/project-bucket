import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControl,
  Input,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

export default function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#77D47D" };
  const submitStyle = { backgroundColor: "#77D47D", marginTop:10};
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            {/* <AddCircleOutlineOutlinedIcon /> */}
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill out this form to create an account
          </Typography>
        </Grid>
        <FormControl onSubmit={handleFormSubmit}>
          <TextField
            onChange={handleChange}
            name="firstName"
            fullWidth
            label="First Name"
          />
          <TextField
            onChange={handleChange}
            name="lastName"
            fullWidth
            label="Last Name"
          />
          <TextField
            onChange={handleChange}
            name="username"
            type="username"
            fullWidth
            label="Username"
          />
          <TextField
            onChange={handleChange}
            type="email"
            name="email"
            fullWidth
            label="Email"
          />
          <TextField
            onChange={handleChange}
            type="password"
            name="password"
            fullWidth
            label="Password"
          />
          <TextField
            onChange={handleChange}
            id="signupConfPass"
            fullWidth
            label="Confirm Password"
          />
          <Button
            id="signupSubmit"
            align="center"
            type="submit"
            variant="contained"
            style={submitStyle}
          >
            Sign Up
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
}
