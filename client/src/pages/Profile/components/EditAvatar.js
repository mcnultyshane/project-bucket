import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { ADD_USER } from "../../../utils/mutations";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Axios from 'axios'


export default function EditAvatar(props, event ) {
    const user = props.user
  const [formState, setFormState] = useState({ avatar: "" });
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

  const handleFormSubmit = async (user ,event) => {
    event.preventDefault();
    console.log(user);
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

  

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#77D47D" };
  const submitStyle = { backgroundColor: "#77D47D", marginTop:10};
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>

          </Avatar>
          <h2 style={headerStyle}>Upload a new avatar</h2>

        </Grid>
        <form onSubmit={handleFormSubmit}>
          <div>
          <input type="file" name="avatar" onChange={(e)=> {
            setImageSelected(e.target.files[0])
            }} />
             </div>
             <div>
            <Button size="small" variant="contained" onClick={uploadImage}>upload</Button>
            </div>
          <Button
            id="signupSubmit"
            align="center"
            type="submit"
            variant="contained"
            style={submitStyle}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
