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
} from "@material-ui/core";
import Axios from 'axios'


export default function Signup() {
  const [formState, setFormState] = useState({ firstName: "", lastName: "", username: "", email: "", password: "", avatar: "" });
  const [addUser] = useMutation(ADD_USER);
  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "m9i5zjc7")


    Axios.post("https://api.cloudinary.com/v1_1/djhw1foiq/image/upload", formData).then((response) => {
      const userAvatar = response.data.url
      console.log(userAvatar)
        setFormState({
          ...formState,
        avatar: userAvatar
    })
    }) 

     
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
    const { data } = await addUser({
      variables: { ...formState
      },
    });
    console.log(data)
    const token = data.addUser.token;
    Auth.login(token);
    } catch (error) {
    console.error(error);
  }
  }
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
            Please fill out this form to begin your B*UCKET
          </Typography>
        </Grid>
        <form onSubmit={handleFormSubmit}>
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
          <div>
          <input type="file" name="avatar" onChange={(e)=> {
            setImageSelected(e.target.files[0])
            }} />
            <Button size="small" onClick={uploadImage}>upload</Button>
            </div>
          <Button
            id="signupSubmit"
            align="center"
            type="submit"
            variant="contained"
            style={submitStyle}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
