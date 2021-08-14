import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ADD_CAMPAIGN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";



 const NewCampaign = ({ userId }) => {
   
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [fundsNeeded, setFundsNeeded] = useState('');

   const [addBucketList, { error }] = useMutation(ADD_CAMPAIGN);


   const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addBucketList({
        variables: { userId, title, description, fundsNeeded },
      });

      setTitle('');
      setDescription('');
      setFundsNeeded('');
    } catch (err) {
      console.error(err);
    }
  };
    // const [formState, setFormState] = useState({ title: "", description: "", fundsNeeded: ""})

    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   setFormState({
    //     ...formState,
    //     [name]: value,
    //   });
    // }
   const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
  const classes = useStyles();
  const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const submitStyle = { backgroundColor: "#77D47D", fontSize:20 };
  const textInputStyle = { marginBottom: "5px", marginTop: "5px" };

  
  return (


    <Grid align="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>NEW CAMPAIGN</h2>
          <Typography variant="caption">
            Please fill out this form to create a new campaign
          </Typography>
        </Grid>
        {Auth.loggedIn() ? (
        <form onSubmit = {handleFormSubmit}>
          <TextField
             value={title}
             onChange = {(event) => setTitle(event.target.value)}
             fullWidth
             style={textInputStyle}
             label="Campaign Title"
            variant="outlined"
            />
          <TextField
            name = "description"
            value={description}
            onChange = {(event) => setDescription(event.target.value)}
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
          />
          <TextField
             value={fundsNeeded}
             onChange = {(event) => setFundsNeeded(event.target.value)}
            fullWidth
            style={textInputStyle}
            label="Funds Needed"
            variant="outlined"
          />
          <TextField
            name = "location"
            fullWidth
            style={textInputStyle}
            label="Location"
            variant="outlined"
          />
          <div className={classes.container} noValidate>
            <TextField
              style={textInputStyle}
              label="Timeframe"
              type="date"
              // defaultValue="2021-08-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </div>
          {/* </form> */}

          <Button
            id='newCampaignSubmit'
            align="center"
            type="submit"
            variant="contained"
            style={submitStyle}
          >
            Create Campaign
          </Button>
        </form>
        ) : (
          <p> You need to be logged in to create a campaign </p>
        )}
      </Paper>
    </Grid>
  );
};

export default NewCampaign;